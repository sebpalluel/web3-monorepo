import { Box } from '@chakra-ui/react';
import { ReactNode, Suspense } from 'react';
import dynamic from 'next/dynamic';

import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const Header = dynamic(() => import('./Header').then((res) => res.default), {
    ssr: false,
  });
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
