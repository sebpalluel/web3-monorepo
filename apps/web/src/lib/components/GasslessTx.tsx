// https://biconomy.gitbook.io/sdk/sdk-reference/sending-transactions/gasless-transactions/sending-erc-721-nft-tokens
import { ethers } from 'ethers';
import { useState } from 'react';
import { useBiconomyStore } from '@client/biconomy/store';
import { Box, Button, Text, useColorMode } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

const GasslessTx = () => {
  const [successMsg, setSuccessMsg] = useState<string | undefined>(undefined);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
  const { colorMode } = useColorMode();
  const smartAccountAddress = useBiconomyStore.use.smartAccountAddress();
  const smartAccountLoading = useBiconomyStore.use.smartAccountLoading();
  const [loading, setLoading] = useState(false);
  const [minedTx, setMinedTx] = useState<string | undefined>(undefined);

  const sendNFT = async () => {
    try {
      setLoading(true);
      const smartAccount = window.biconomySmartAccount;
      if (!smartAccount) return;
      // dummy poly address
      const recipientAddress = '0x0000000000000000000000000000000000000000';
      // test poly contract address
      const nftAddress = '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619';
      const tokenId = 0;
      const erc721Interface = new ethers.utils.Interface([
        'function safeTransferFrom(address _from, address _to, uint256 _tokenId)',
      ]);
      // Encode an ERC-721 token transfer to recipient of the specified amount
      const data = erc721Interface.encodeFunctionData('safeTransferFrom', [
        smartAccountAddress,
        recipientAddress,
        tokenId,
      ]);
      const tx1 = {
        to: nftAddress,
        data,
      };
      // Transaction subscription
      smartAccount.on('txHashGenerated', (response: any) => {
        console.log('txHashGenerated event received via emitter', response);
        setSuccessMsg(`Transaction sent: ${response.hash}`);
      });
      smartAccount.on('txMined', (response: any) => {
        console.log('txMined event received via emitter', response);
        setSuccessMsg(`Transaction mined: ${response.hash}`);
        setMinedTx(response.hash);
        setLoading(false);
      });
      smartAccount.on('error', (response: any) => {
        setErrorMsg(`error event received via emitter: ${JSON.stringify(response)}`);
        setLoading(false);
      });
      // Sending transaction
      // Gasless
      const txResponse = await smartAccount.sendGaslessTransaction({
        transaction: tx1,
      });
      console.log('txResponse', txResponse);
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
    }
  };
  const handleShowTx = () => {
    window.open(`https://mumbai.polygonscan.com/tx/${minedTx}`, '_blank');
  };
  return (
    <Box paddingTop="2rem" paddingBottom="1rem">
      <Button
        onClick={sendNFT}
        isLoading={loading || smartAccountLoading || !smartAccountAddress}
      >
        Send NFT to a dummy polygon address with a gasless (sponsored) transaction
      </Button>
      {(successMsg || errorMsg) && (
        <Text
          backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.500'}
          borderRadius={4}
          marginTop={4}
          padding={4}
        >
          {successMsg ? `Success: ${successMsg}` : `Error: ${errorMsg}`}
        </Text>
      )}
      {!!minedTx && (
        <Button
          onClick={handleShowTx}
          marginTop={4}
          leftIcon={<LinkIcon />}
          colorScheme="blue"
        >
          Show the tx
        </Button>
      )}
    </Box>
  );
};

export default GasslessTx;
