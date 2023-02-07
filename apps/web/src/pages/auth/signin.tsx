import {
  Flex,
  Box,
  FormControl,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { signIn } from 'next-auth/react';
import { providers } from '@client/next-auth/options';
import { useRouter } from 'next/router';

import styles from './signin.module.css';

// server side
export async function getServerSideProps() {
  return {
    props: {
      providers: providers.map((provider) => provider.options?.id || provider.id),
    },
  };
}

export function ProvidersBtns({ providers, router }) {
  return (
    <>
      {providers.includes('siwe') ? (
        <div className={styles.walletsButton}>
          <ConnectButton />
        </div>
      ) : null}
      {providers.includes('did-provider') ? (
        <Button
          w="full"
          onClick={() =>
            signIn('did-provider', {
              callbackUrl: router.query.callbackUrl?.toString() || '',
            })
          }
        >
          Walt.id IDPKit
        </Button>
      ) : null}
    </>
  );
}

export default function SignIn({ providers }) {
  const router = useRouter();
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <FormControl id="oauth">
            <VStack>
              <ProvidersBtns providers={providers} router={router} />
            </VStack>
          </FormControl>
        </Box>
      </Stack>
    </Flex>
  );
}
