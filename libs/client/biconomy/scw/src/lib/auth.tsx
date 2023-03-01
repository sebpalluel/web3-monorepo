import { useState, useEffect, useRef } from 'react';
import SocialLogin from '@biconomy/web3-auth';
import { ChainId } from '@biconomy/core-types';
import { ethers } from 'ethers';
import SmartAccount from '@biconomy/smart-account';
import { getNextAppURL } from '@client/next-auth/common';

export default function Home() {
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [interval, enableInterval] = useState(false);
  const sdkRef = useRef<SocialLogin | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let configureLogin: any;
    if (interval) {
      configureLogin = setInterval(() => {
        if (sdkRef.current?.provider) {
          setupSmartAccount();
          clearInterval(configureLogin);
        }
      }, 1000);
    }
  }, [interval]);

  async function login() {
    if (!sdkRef.current) {
      const socialLoginSDK = new SocialLogin();
      const appUrl = getNextAppURL();
      // const signature1 = await socialLoginSDK.whitelistUrl('https://*.vercel.app');
      const signature1 = await socialLoginSDK.whitelistUrl(appUrl);
      const whitelistUrls: { [P in string]: string } = {};
      whitelistUrls[appUrl] = signature1;
      await socialLoginSDK.init({
        chainId: ethers.utils.hexValue(ChainId.POLYGON_MAINNET),
        whitelistUrls,
        // whitelistUrls: {
        //   'https://*.vercel.app': signature1,
        // },
      });
      sdkRef.current = socialLoginSDK;
    }
    if (!sdkRef.current.provider) {
      // sdkRef.current.showConnectModal()
      sdkRef.current.showWallet();
      enableInterval(true);
    } else {
      setupSmartAccount();
    }
  }

  async function setupSmartAccount() {
    if (!sdkRef?.current?.provider) return;
    sdkRef.current.hideWallet();
    setLoading(true);
    const web3Provider = new ethers.providers.Web3Provider(sdkRef.current.provider);
    try {
      const smartAccount = new SmartAccount(web3Provider, {
        activeNetworkId: ChainId.POLYGON_MAINNET,
        supportedNetworksIds: [ChainId.POLYGON_MAINNET],
      });
      await smartAccount.init();
      setSmartAccount(smartAccount);
      setLoading(false);
    } catch (err) {
      console.log('error setting up smart account... ', err);
    }
  }

  const logout = async () => {
    if (!sdkRef.current) {
      console.error('Web3Modal not initialized.');
      return;
    }
    await sdkRef.current.logout();
    sdkRef.current.hideWallet();
    setSmartAccount(null);
    enableInterval(false);
  };

  return (
    <div>
      <h1>BICONOMY AUTH</h1>
      {!smartAccount && !loading && <button onClick={login}>Login</button>}
      {loading && <p>Loading account details...</p>}
      {!!smartAccount && (
        <div>
          <h3>Smart account address:</h3>
          <p>{smartAccount.address}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
