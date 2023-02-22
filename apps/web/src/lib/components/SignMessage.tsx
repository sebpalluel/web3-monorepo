import { useState } from 'react';
import { useBiconomyStore } from '@client/biconomy/store';
import { Box, Button, Text, useColorMode } from '@chakra-ui/react';

const SignMessage = () => {
  const { colorMode } = useColorMode();
  const smartAccountAddress = useBiconomyStore.use.smartAccountAddress();
  const smartAccountLoading = useBiconomyStore.use.smartAccountLoading();
  const [loading, setLoading] = useState(false);
  const createSignature = async () => {
    try {
      setLoading(true);
      const signature = await window.biconomySmartAccount
        ?.getsigner()
        ?.signMessage('Hello World');
      console.log({ signature });
      setSignature(signature);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const [signature, setSignature] = useState<string | undefined>(undefined);
  return (
    <Box paddingTop="2rem" paddingBottom="1rem">
      <Button
        onClick={createSignature}
        isLoading={loading || smartAccountLoading || !smartAccountAddress}
      >
        Sign message Hello World
      </Button>
      {signature && (
        <Text
          backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.500'}
          borderRadius={4}
          marginTop={4}
          padding={4}
        >{`Signature result: ${signature}`}</Text>
      )}
    </Box>
  );
};

export default SignMessage;
