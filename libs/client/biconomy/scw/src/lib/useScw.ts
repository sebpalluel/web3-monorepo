import { useCallback, useEffect, useState, useMemo } from 'react';
import { ethers } from 'ethers';
import { ChainId } from '@biconomy-sdk-dev/core-types';
import SocialLogin from '@biconomy-sdk-dev/web3-auth';
import { useSession, signIn, signOut, getCsrfToken } from 'next-auth/react';
import { SiweMessage } from 'siwe';
import { useNetwork } from 'wagmi';
import { useBiconomyStore } from '@client/biconomy/store';
import { getNextAppURL } from '@client/next-auth/common';

const useScw = () => {
  const { chain } = useNetwork();
  const { data: session, status } = useSession();

  const smartAccountLoading = useBiconomyStore.use.smartAccountLoading();
  const smartAccountAddress = useBiconomyStore.use.smartAccountAddress();
  const setupBiconomy = useBiconomyStore.use.setupBiconomy();
  const account = useBiconomyStore.use.account();
  const resetBiconomyStore = useBiconomyStore.use.reset();
  const [siweLoading, setSiweLoading] = useState(false);
  const [signoutLoading, setSignoutLoading] = useState(false);

  // wrap the initialization of 'sdk' in its own useMemo() to avoid rerender
  const sdk = useMemo(() => new SocialLogin(), []);
  const Mumbai = 80001;

  // signin with siwe to provide a JWT through next-auth
  const handleSiwe = useCallback(async () => {
    try {
      // here mean waiting for smart account to be setup
      if (!account || !window.biconomySmartAccount) return;
      setSiweLoading(true);
      const signer = window.biconomySmartAccount.getsigner();
      const message = new SiweMessage({
        domain: window.location.host,
        address: account as string,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: Mumbai,
        nonce: await getCsrfToken(),
      });
      const signature = await signer?.signMessage(message.prepareMessage());
      await signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl: window.location.href,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSiweLoading(false);
    }
  }, [account]);

  // signout from biconomy and next auth
  const disconnectWeb3 = useCallback(async () => {
    try {
      setSignoutLoading(true);
      if (window.biconomySocialLogin?.provider) await window.biconomySocialLogin.logout();
      window.biconomySocialLogin?.hideWallet();
      resetBiconomyStore();
      // signout from next auth
      await signOut({ callbackUrl: '/', redirect: true });
    } catch (error) {
      console.error(error);
    } finally {
      setSignoutLoading(false);
    }
  }, [resetBiconomyStore]);

  //
  const handleBiconomy = useCallback(async () => {
    try {
      if (!window.biconomySocialLogin) {
        const appUrl = getNextAppURL();
        const signature1 = await sdk.whitelistUrl(appUrl);
        const whitelistUrls: { [P in string]: string } = {};
        whitelistUrls[appUrl] = signature1;
        await sdk.init({
          chainId: ethers.utils.hexValue(Mumbai),
          whitelistUrls,
          whteLableData: {
            logo: 'https://user-images.githubusercontent.com/11297176/195363494-6cc53b41-958d-4493-88b3-2cbfc65a2594.png',
            name: 'Web3 Monorepo',
          },
        });
        // store the sdk on the window object
        window.biconomySocialLogin = sdk;
        console.log('initial setup of sdk', window.biconomySocialLogin);
      }
      if (!window.biconomySmartAccount && window.biconomySocialLogin.provider) {
        await setupBiconomy(Mumbai as ChainId);
        console.log('smartAccount', window.biconomySmartAccount);
      }
    } catch (error) {
      console.error(error);
    }
  }, [sdk, setupBiconomy]);

  // this is the main hook that will be called on initial loading of the page
  // init biconomy sdk on load, if get provider means user is logged in so init provider and account
  useEffect(() => {
    const init = async () => {
      // TODO handle case where next auth or biconomy session is expired
      await handleBiconomy();
      // if user session for biconomy is active and user is not logged in to next auth, then login to next auth
      if (!session && window.biconomySmartAccount) await handleSiwe();
      // if user is logged in to next auth and biconomy session is inactive, then logout from next auth and reset biconomy store
      else if (session && !window.biconomySmartAccount) {
        await disconnectWeb3();
      }
    };
    init().catch((error) => console.error(error));
  }, [session, account, handleSiwe, handleBiconomy, disconnectWeb3]);

  // user intend to log in, show wallet widget
  const connectWeb3 = useCallback(async () => {
    sdk.showWallet();
  }, [sdk]);

  // get the event after biconomy wallet is connected, should hide the wallet widget once connected
  useEffect(() => {
    const interval = setInterval(async () => {
      if (account) {
        clearInterval(interval);
        window.biconomySocialLogin?.hideWallet();
      }
      if (window.biconomySocialLogin?.provider && !account) {
        await handleBiconomy();
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [account, handleBiconomy]);

  //
  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      handleSiwe(); // Force sign in to hopefully resolve error
    }
  }, [session]);
  return {
    connectWeb3,
    disconnectWeb3,
    smartAccountLoading,
    smartAccountAddress,
    siweLoading,
    signoutLoading,
  };
};

export default useScw;
