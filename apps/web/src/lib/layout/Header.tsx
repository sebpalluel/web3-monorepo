import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import styles from './header.module.css';

import ThemeToggle from './ThemeToggle';

export function HeaderContent({ session }) {
  if (!session) {
    return (
      <>
        <span className={styles.notSignedInText}>You are not signed in</span>
        <a
          href={`/api/auth/signin`}
          className={styles.buttonPrimary}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
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
