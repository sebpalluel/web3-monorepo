import { Box, Flex, Heading, useBreakpointValue, Button, Text } from '@chakra-ui/react';
import { signOut, useSession, getCsrfToken } from 'next-auth/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import styles from './header.module.css';
import '@rainbow-me/rainbowkit/styles.css';
import '@biconomy/web3-auth/dist/src/style.css';

import ThemeToggle from './ThemeToggle';

import { RainbowKitSiweNextAuthProvider } from '../components/RainbowKitSiweNextAuthProvider';

import { useWeb3Connect } from '../hooks/useWeb3Connect';

import { RainbowKitProvider, lightTheme, darkTheme } from '@rainbow-me/rainbowkit';
import { Chain } from 'wagmi';

export function HeaderContent({ session, scwLoading, connectWeb3, disconnectWeb3 }) {
  if (!session) {
    return (
      <>
        <Text noOfLines={1}>You are not signed in</Text>
        <Button
          isLoading={scwLoading}
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
      </>
    );
  }
  return (
    <Button
      isLoading={scwLoading}
      loadingText="Signing in..."
      bg={'blue.400'}
      color={'white'}
      onClick={disconnectWeb3}
      _hover={{
        bg: 'blue.500',
      }}
    >
      Sign out
    </Button>
    // <ConnectButton />
    // <>
    //   {session.user.chainId ? (
    //     <ConnectButton />
    //   ) : (
    //     <>
    //       {session.user.image && (
    //         <span
    //           style={{ backgroundImage: `url('${session.user.image}')` }}
    //           className={styles.avatar}
    //         />
    //       )}
    //       <span className={styles.signedInText}>
    //         <small>Signed in as</small>
    //         <br />
    //         <strong>{session.user.email || session.user.name}</strong>
    //       </span>
    //       <a
    //         href={`/api/auth/signout`}
    //         className={styles.button}
    //         onClick={(e) => {
    //           e.preventDefault();
    //           signOut({ redirect: true, callbackUrl: '/' });
    //         }}
    //       >
    //         Sign out
    //       </a>
    //     </>
    //   )}
    // </>
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

type HeaderProps = {
  chains: Chain[];
};

const Header = ({ chains }: HeaderProps) => {
  const { data: session, status } = useSession();
  const headerWidth = useBreakpointValue(
    { xs: 'auto', sm: 'auto', md: !session ? '50%' : 'auto' },
    { ssr: true }
  );
  const loading = status === 'loading';

  const { disconnectWeb3, scwLoading, ...web3ConnectProps } = useWeb3Connect({
    session,
    chains,
  });

  const rainbowKitProviderConfig = {
    chains,
    theme: {
      lightMode: lightTheme({
        accentColor: '#3B72F2',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      }),
      darkMode: darkTheme({
        accentColor: '#3B92F2',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      }),
    },
  };

  return (
    <RainbowKitSiweNextAuthProvider disconnectWeb3={disconnectWeb3}>
      <RainbowKitProvider {...rainbowKitProviderConfig}>
        <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
          <Flex as="header" width="full" align="center">
            <Heading style={{ width: headerWidth }} as="h1" size={{ sm: 'sm', md: 'md' }}>
              <div className={styles.signedInStatus}>
                <div
                  className={`nojs-show ${
                    !session && loading ? styles.loading : styles.loaded
                  }`}
                >
                  <HeaderContent
                    session={session}
                    scwLoading={scwLoading}
                    disconnectWeb3={disconnectWeb3}
                    {...web3ConnectProps}
                  />
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
        </Box>
      </RainbowKitProvider>
    </RainbowKitSiweNextAuthProvider>
  );
};

export default Header;
