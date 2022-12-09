import { Box, Flex, Heading } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './header.module.css';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <div className={styles.signedInStatus}>
          <p
            className={`nojs-show ${
              !session && loading ? styles.loading : styles.loaded
            }`}
          >
            {!session && (
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
            )}
            {session?.user && (
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
                  <strong>{session.user.email ?? session.user.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </p>
        </div>
        <nav>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/client">Client</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/server">Server</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/admin">Admin</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/me">Me</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blockchain">Blockchain</Link>
            </li>
          </ul>
        </nav>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
