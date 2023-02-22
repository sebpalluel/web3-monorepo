import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { Box, Heading, Button } from '@chakra-ui/react';

const SignMessage = dynamic(() => import('../../lib/components/SignMessage'), {
  ssr: false,
});
const GasslessTx = dynamic(() => import('../../lib/components/GasslessTx'), {
  ssr: false,
});

const BiconomyFeatures = () => {
  return (
    // align content in Box from chakra column left aligned

    <Box>
      <Heading as="h2" fontSize={{ base: 'lg', sm: 'xl' }}>
        Biconomy Features
      </Heading>
      <Suspense fallback={<div>Loading...</div>}>
        <SignMessage />
        <GasslessTx />
      </Suspense>
    </Box>
  );
};

export default BiconomyFeatures;
