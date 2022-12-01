import { ChakraProvider, localStorageManager } from '@chakra-ui/react';

import theme from '@client/ui/theme';

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
};
