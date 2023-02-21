import { useState, useCallback, useEffect, useMemo } from 'react';
import { signIn, signOut, getCsrfToken, useSession } from 'next-auth/react';

import { ethers } from 'ethers';
import SocialLogin from '@biconomy/web3-auth';
import SmartAccount from '@biconomy/smart-account';

import { SiweMessage } from 'siwe';
import { useNetwork, Chain } from 'wagmi';
import { Session } from 'next-auth';

type web3ConnectType = {
  session: Session;
  chains: Chain[];
};

export function useWeb3Connect({ session, chains }: web3ConnectType) {
  const [provider, setProvider] = useState<any>();
  const [account, setAccount] = useState<string>();
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [scwAddress, setScwAddress] = useState('');
  const [scwLoading, setScwLoading] = useState(false);
  const [socialLoginSDK, setSocialLoginSDK] = useState<SocialLogin | null>(null);
  const { status } = useSession();

  const { chain } = useNetwork();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const handleSiweNextAuth = async () => {
    try {
      const nonce = await getCsrfToken();
      const message = new SiweMessage({
        domain: window.location.host,
        address: account,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce,
      });
      const signature = await signer?.signMessage(message.prepareMessage());
      console.log('signature', signature);
      signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl: window.location.href,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const connectWeb3 = useCallback(async () => {
    console.log('socialLoginSDK', socialLoginSDK);
    if (socialLoginSDK?.provider) {
      const web3Provider = new ethers.providers.Web3Provider(socialLoginSDK.provider);
      setProvider(web3Provider);
      const accounts = await web3Provider.listAccounts();
      setAccount(accounts[0]);
      return;
    }
    if (socialLoginSDK) {
      socialLoginSDK.showWallet();
      return socialLoginSDK;
    }
    const sdk = new SocialLogin();
    await sdk.init({
      chainId: ethers.utils.hexValue(chain?.id || 80001),
    });
    setSocialLoginSDK(sdk);
  }, [socialLoginSDK, chain?.id]);

  // if wallet connected and session not provided -> auto login with siwe
  useEffect(() => {
    if (smartAccount && !session) {
      console.log(smartAccount);
      handleSiweNextAuth();
    }
  }, [smartAccount, session]);

  // if wallet already connected close widget
  useEffect(() => {
    if (socialLoginSDK && socialLoginSDK.provider) {
      console.log('hide wallet');
      socialLoginSDK.hideWallet();
    }
  }, [account, socialLoginSDK]);

  // after metamask login -> get provider event
  useEffect(() => {
    const interval = setInterval(async () => {
      if (account) {
        clearInterval(interval);
      }
      if (socialLoginSDK?.provider && !account) {
        connectWeb3();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [account, connectWeb3, socialLoginSDK]);

  const disconnectWeb3 = async () => {
    console.log('disconnectWeb3');
    if (!socialLoginSDK || !socialLoginSDK.web3auth) {
      console.error('Web3Modal not initialized.');
      return;
    }
    await socialLoginSDK.logout();
    await signOut({ redirect: true, callbackUrl: '/' });
    socialLoginSDK.hideWallet();
    setProvider(undefined);
    setAccount(undefined);
    setScwAddress('');
  };

  // useEffect(() => {
  //   async function setupSmartAccount() {
  //     setScwAddress('');
  //     setScwLoading(true);
  //     const smartAccount = new SmartAccount(provider, {
  //       activeNetworkId: chain?.id || 80001,
  //       supportedNetworksIds: chains.map((chain) => chain.id),
  //     });
  //     await smartAccount.init();
  //     const context = smartAccount.getSmartAccountContext();
  //     setSigner(smartAccount.getsigner());
  //     setScwAddress(context.baseWallet.getAddress());
  //     setSmartAccount(smartAccount);
  //     setScwLoading(false);
  //   }
  //   if (!!provider && !!account) {
  //     setupSmartAccount();
  //     console.log('Provider...', provider);
  //   }
  //   console.log({ account, provider, status });
  //   if (status === 'unauthenticated' && account && provider) handleSiweNextAuth();
  // }, [account, provider, chain?.id]);
  return {
    disconnectWeb3,
    connectWeb3,
    account,
    provider,
    smartAccount,
    scwAddress,
    scwLoading,
    signer,
  };
}
