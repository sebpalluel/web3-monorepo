import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Chain } from 'wagmi';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
  chains: Chain[];
};

const Layout = ({ children, chains }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header chains={chains} />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
