import { Box } from '@chakra-ui/react';

// needed for standalone build https://github.com/nrwl/nx/issues/9017
import path from 'path';
path.resolve('./next.config.js');
//

import CTASection from '../lib/components/samples/CTASection';
import SomeImage from '../lib/components/samples/SomeImage';
import SomeText from '../lib/components/samples/SomeText';

export default function Home() {
  return (
    <Box
      display={{ md: 'flex' }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <SomeImage />

      <Box>
        <SomeText />
        <CTASection />
      </Box>
    </Box>
  );
}
