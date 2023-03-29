import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './header.module.css';
import '@biconomy-sdk-dev/web3-auth/dist/src/style.css';

import ThemeToggle from './ThemeToggle';

import { Chain } from 'wagmi';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export function HeaderContent({ session }) {
  // we need to instantiate this component dynamically to avoid SSR,
  // otherwise we get an issue with window and the generated code from biconomy
  const BiconomyDynamic = dynamic(
    () => import('../components/Biconomy').then((res) => res.default),
    {
      ssr: false,
    }
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BiconomyDynamic />
    </Suspense>
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
    routes.push(
      { name: 'Me', href: '/me' },
      { name: 'Biconomy', href: '/biconomy' },
      { name: 'Wallet', href: '/wallet' }
    );
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

  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
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
    </Box>
  );
};

export default Header;
