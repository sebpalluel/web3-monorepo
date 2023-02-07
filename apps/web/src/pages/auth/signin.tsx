import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  VStack,
  FormErrorMessage,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { signIn } from 'next-auth/react';
import { providers } from '@client/next-auth/options';
import { logger } from '@logger';
import { useRouter } from 'next/router';

import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import styles from './signin.module.css';

// server side
export async function getServerSideProps() {
  return {
    props: {
      providers: providers.map((provider) => provider.options?.id || provider.id),
    },
  };
}

export function ProvidersBtns({ providers, router, onToggleCollapse }) {
  return (
    <>
      {providers.includes('siwe') ? (
        <div className={styles.walletsButton}>
          <ConnectButton />
        </div>
      ) : null}
      {providers.includes('google') ? (
        <Button
          w="full"
          leftIcon={<AiFillGoogleCircle />}
          onClick={() =>
            signIn('google', {
              callbackUrl: router.query.callbackUrl?.toString() || '',
            })
          }
        >
          Google
        </Button>
      ) : null}
      {providers.includes('github') ? (
        <Button
          w="full"
          leftIcon={<AiFillGithub />}
          onClick={() =>
            signIn('github', {
              callbackUrl: router.query.callbackUrl?.toString() || '',
            })
          }
        >
          Github
        </Button>
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
      {providers.includes('credentials-password') ? (
        <Button w="full" leftIcon={<BiLockAlt />} onClick={onToggleCollapse}>
          User & password
        </Button>
      ) : null}
    </>
  );
}

function CredentialsForm({ router, credentialsInvalid }) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();
  const defaultBody = {
    grant_type: '',
    username: '',
    password: '',
    scope: '',
    client_id: '',
    client_secret: '',
  };
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(values: any) {
    try {
      const body = { ...defaultBody, ...values };
      const res = await signIn('credentials-password', {
        ...body,
        callbackUrl: router.query.callbackUrl,
        redirect: false,
      });
      if (res?.ok && !res?.error)
        router.push(res.url && !res.url.includes('auth/signin') ? res.url : '/');
      else router.push({ query: { error: 'CredentialsInvalid' } });
    } catch (error) {
      if (!error?.includes('Invalid credentials')) logger.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} pt={10}>
        <FormControl id="email" isInvalid={!!credentialsInvalid} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('username')} />
        </FormControl>
        <FormControl id="password" isRequired isInvalid={!!credentialsInvalid}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? 'text' : 'password'} {...register('password')} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{credentialsInvalid}</FormErrorMessage>
        </FormControl>
        <Stack spacing={10}>
          <Stack
            direction={{
              base: 'column',
              sm: 'row',
            }}
            align={'start'}
            justify={'space-between'}
          >
            <Checkbox>Remember me</Checkbox>
            <Link color={'blue.400'}>Forgot password?</Link>
          </Stack>
          <Button
            isLoading={isSubmitting}
            loadingText="Signing in..."
            bg={'blue.400'}
            color={'white'}
            type="submit"
            _hover={{
              bg: 'blue.500',
            }}
          >
            Sign in
          </Button>
        </Stack>
        <Stack pt={6}>
          <Text align={'center'}>
            Not a user yet?{' '}
            <Link
              color={'blue.400'}
              href={`signup${
                router.query.callbackUrl ? `?callbackUrl=${router.query.callbackUrl}` : ''
              }`}
            >
              Register
            </Link>
          </Text>
        </Stack>
      </Stack>
    </form>
  );
}

export default function SignIn({ providers }) {
  const { isOpen: isOpenCollapse, onToggle: onToggleCollapse } = useDisclosure();
  const router = useRouter();
  const [credentialsInvalid, OAuthAccountNotLinked] = useMemo(() => {
    const error = router.query.error;
    return [
      error === 'CredentialsInvalid' ? 'Invalid email or password' : '',
      error === 'OAuthAccountNotLinked'
        ? 'You tried to sign in with a provider that is not linked to an existing account.\n\
                Try with an other one or proceed with an email and password.'
        : '',
    ];
  }, [router.query.error]);

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
          <FormControl id="oauth" isInvalid={!!OAuthAccountNotLinked}>
            <VStack>
              <ProvidersBtns
                providers={providers}
                onToggleCollapse={onToggleCollapse}
                router={router}
              />
            </VStack>
            <FormErrorMessage>{OAuthAccountNotLinked}</FormErrorMessage>
          </FormControl>
          <Collapse in={isOpenCollapse}>
            <CredentialsForm credentialsInvalid={credentialsInvalid} router={router} />
          </Collapse>
        </Box>
      </Stack>
    </Flex>
  );
}
