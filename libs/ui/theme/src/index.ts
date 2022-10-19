import { extendTheme } from '@chakra-ui/react';
import { config } from './config';

// Foundations
import * as foundations from './foundations';

// Components
import * as components from './components';

const theme: any = extendTheme({
  config,
  ...foundations,
  components: {
    ...components,
  },
});
export default theme;
