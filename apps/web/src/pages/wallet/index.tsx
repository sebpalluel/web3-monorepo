import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { supportedChains } from '@dlt/types';
import { useQuery } from '@tanstack/react-query';
import {
  SubscribeWalletsByAddressDocument,
  useBalancesEip377Query,
  GetWalletsByAddressQuery,
} from '@client/gql/user';
import { useReactQuerySubscription } from '@client/hasura/fetcher';

import {
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
  Text,
  InputGroup,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function BlockchainPage() {
  const [balanceVariables, setBalanceVariables] = useState({ address: '', network: '' });
  const {
    data: balancesData,
    isFetching: balancesDataLoading,
    error: balancesDataError,
  } = useBalancesEip377Query(balanceVariables, {
    enabled: !!balanceVariables.address && !!balanceVariables.network,
  });
  useReactQuerySubscription(
    SubscribeWalletsByAddressDocument,
    'subscribeWalletsByAddress',
    {
      address: balanceVariables.address,
    }
  );
  const { data: walletSubscription } = useQuery<GetWalletsByAddressQuery>([
    'subscribeWalletsByAddress',
    {
      address: balanceVariables.address,
    },
  ]);

  // const
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(setBalanceVariables)}>
          <Stack pt={10} spacing={8} direction="row">
            <FormControl
              id="address"
              isInvalid={balancesDataError?.message.includes('Address')}
              isRequired
            >
              <FormLabel>My Wallet</FormLabel>
              <InputGroup>
                <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                  <GridItem colSpan={2}>
                    <Select
                      mr="1rem"
                      variant="outline"
                      placeholder="Select the network"
                      {...register('network')}
                    >
                      {Object.values(supportedChains).map((chain) => (
                        <option key={chain.name} value={chain.network}>
                          {chain.name}
                        </option>
                      ))}
                      {/* supportedChains */}
                    </Select>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Input
                      type="text"
                      placeholder="0xb794f5ea0ba39494ce839613fffba74279579268"
                      {...register('address')}
                    />
                    <FormErrorMessage>{balancesDataError?.message}</FormErrorMessage>
                  </GridItem>
                </Grid>
              </InputGroup>
            </FormControl>
          </Stack>
          <Stack spacing={4} pt={10}>
            <Button
              isLoading={isSubmitting || balancesDataLoading}
              loadingText="Getting your wallet infos..."
              bg={'blue.400'}
              color={'white'}
              type="submit"
              _hover={{
                bg: 'blue.500',
              }}
            >
              Submit
            </Button>
          </Stack>
        </form>
        <Stack pt={6}>
          <Text align={'center'}>My Wallet Balances</Text>
          <p>
            {!balancesDataLoading
              ? JSON.stringify(balancesData?.balancesEIP377)
              : 'Loading...'}
          </p>
        </Stack>
        <Stack pt={6}>
          <Text align={'center'}>My Wallet Subscription</Text>
          <p>{JSON.stringify(walletSubscription?.Wallet)}</p>
        </Stack>
        <Text fontSize="8xl"></Text>
        {/* <p style={{ marginTop: '6rem' }}>Graph Client with React Query Example</p>
        <p>
          <button type="button" onClick={() => refetch()} disabled={isLoading}>
            Re Execute Query
          </button>
        </p>
        <p>{isLoading ? 'Loading...' : 'You can find the result below...'}</p>
        <fieldset>
          {data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
            </form>
          )}
          {error && (
            <form>
              <label>Error</label>
              <br />
              <textarea value={JSON.stringify(error, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset> */}
      </header>
    </div>
  );
}
