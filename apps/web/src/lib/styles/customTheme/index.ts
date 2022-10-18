import { extendTheme } from '@chakra-ui/react';

import Button from './components/button';
import colors from './colors';
import { config } from './config';
import fonts from './fonts';

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components: {
    Button,
  },
});

export default customTheme;
