import { useState, useCallback, useEffect } from 'react';
import { Box, Flex, Heading, useBreakpointValue, Button, Text } from '@chakra-ui/react';
import { signIn, signOut, useSession, getCsrfToken } from 'next-auth/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import styles from './header.module.css';

import ThemeToggle from './ThemeToggle';

import { ethers } from 'ethers';
import { ChainId } from '@biconomy/core-types';
import SocialLogin from '@biconomy/web3-auth';
import SmartAccount from '@biconomy/smart-account';

import { SiweMessage } from 'siwe';
import { useNetwork } from 'wagmi';

export function HeaderContent({ session }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [provider, setProvider] = useState<any>();
  const [account, setAccount] = useState<string>();
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [scwAddress, setScwAddress] = useState('');
  const [scwLoading, setScwLoading] = useState(false);
  const [socialLoginSDK, setSocialLoginSDK] = useState<SocialLogin | null>(null);

  const { chain } = useNetwork();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const handleLogin = async () => {
    try {
      const callbackUrl = '/';
      const message = new SiweMessage({
        domain: window.location.host,
        address: account,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signer?.signMessage(message.prepareMessage());
      console.log('signature', signature);
      signIn('credentials-biconomy', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const connectWeb3 = useCallback(async () => {
    if (typeof window === 'undefined') return;
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
      chainId: ethers.utils.hexValue(80001),
    });
    setSocialLoginSDK(sdk);
    sdk.showWallet();
    return socialLoginSDK;
  }, [socialLoginSDK]);

  // if wallet connected and session not provided -> auto login with siwe
  useEffect(() => {
    console.log(smartAccount);
    if (smartAccount && !session) {
      handleLogin();
    }
  }, [smartAccount, session]);

  // if wallet already connected close widget
  useEffect(() => {
    console.log('hide wallet');
    if (socialLoginSDK && socialLoginSDK.provider) {
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
    if (!socialLoginSDK || !socialLoginSDK.web3auth) {
      console.error('Web3Modal not initialized.');
      return;
    }
    await socialLoginSDK.logout();
    socialLoginSDK.hideWallet();
    setProvider(undefined);
    setAccount(undefined);
    setScwAddress('');
    // signout from next auth
    signOut();
  };

  useEffect(() => {
    async function setupSmartAccount() {
      setScwAddress('');
      setScwLoading(true);
      const smartAccount = new SmartAccount(provider, {
        activeNetworkId: ChainId.GOERLI,
        supportedNetworksIds: [ChainId.GOERLI],
      });
      await smartAccount.init();
      const context = smartAccount.getSmartAccountContext();
      setSigner(smartAccount.getsigner());
      setScwAddress(context.baseWallet.getAddress());
      setSmartAccount(smartAccount);
      setScwLoading(false);
    }
    if (!!provider && !!account) {
      setupSmartAccount();
      console.log('Provider...', provider);
    }
  }, [account, provider]);

  if (!session) {
    return (
      <>
        <Text noOfLines={1}>You are not signed in</Text>
        <Button
          isLoading={isSubmitting}
          loadingText="Signing in..."
          bg={'blue.400'}
          color={'white'}
          onClick={connectWeb3}
          _hover={{
            bg: 'blue.500',
          }}
        >
          Sign in
        </Button>
        {/* <a
          href={`/api/auth/signin`}
          className={styles.buttonPrimary}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a> */}
      </>
    );
  }
  return (
    <>
      {session.user.chainId ? (
        <ConnectButton />
      ) : (
        <>
          {session.user.image && (
            <span
              style={{ backgroundImage: `url('${session.user.image}')` }}
              className={styles.avatar}
            />
          )}
          <span className={styles.signedInText}>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              signOut({ redirect: true, callbackUrl: '/' });
            }}
          >
            Sign out
          </a>
        </>
      )}
    </>
  );
}

export const HeaderRoutes = ({ session }) => {
  type route = {
    name: string;
    href: string;
  };
  const routes: route[] = [
    { name: 'Home', href: '/' },
    { name: 'Client', href: '/client' },
    { name: 'Server', href: '/server' },
    { name: 'Admin', href: '/admin' },
  ];
  if (session)
    routes.push({ name: 'Me', href: '/me' }, { name: 'Wallet', href: '/wallet' });
  return routes.map((route) => (
    <li className={styles.navItem} key={route.name}>
      <Link href={route.href}>{route.name}</Link>
    </li>
  ));
};

const Header = () => {
  const { data: session, status } = useSession();
  const headerWidth = useBreakpointValue(
    { xs: 'auto', sm: 'auto', md: !session ? '50%' : 'auto' },
    { ssr: true }
  );
  const loading = status === 'loading';
  return (
    <Flex as="header" width="full" align="center">
      <Heading style={{ width: headerWidth }} as="h1" size={{ sm: 'sm', md: 'md' }}>
        <div className={styles.signedInStatus}>
          <div
            className={`nojs-show ${
              !session && loading ? styles.loading : styles.loaded
            }`}
          >
            <HeaderContent session={session} />
          </div>
        </div>
        <nav>
          <ul className={styles.navItems}>{HeaderRoutes({ session })}</ul>
        </nav>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
