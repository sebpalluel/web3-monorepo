import { Box, Button, Code, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const repoLink = 'https://github.com/sebpalluel/web3-monorepo';

const CTASection = () => {
  return (
    <Box textAlign={{ base: 'center', md: 'left' }} marginTop={8}>
      <Flex marginY={4} justifyContent={{ base: 'center', md: 'left' }} gridGap={2}>
        <Link
          aria-label="Deploy to Vercel"
          isExternal
          rel="noopener noreferrer"
          href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsebpalluel%2Fweb3-monorepo&env=NEXT_PUBLIC_SENTRY_DSN,SENTRY_DSN,NEXTAUTH_URL,NEXTAUTH_SECRET,GOOGLE_CLIENT_SECRET,GOOGLE_CLIENT_ID,GITHUB_SECRET,GITHUB_ID,NX_CACHE_DIRECTORY,TOKEN_LIFE_TIME&build-command=pnpm%20nx%20build%20web%20--prod&output-directory=dist%2Fapps%2Fweb%2F.next"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          isExternal
          rel="noopener noreferrer"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sebpalluel/web3-monorepo"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>

      <Box marginY={2}>
        <Code>npx degit sebpalluel/web3-monorepo {'<YOUR_APP_NAME>'}</Code>
        <br />

        <Button
          marginTop={2}
          as="a"
          href="https://github.com/sebpalluel/web3-monorepo/generate"
          target="_blank"
          size="sm"
        >
          Use This Template
        </Button>
      </Box>

      <Flex
        justifyContent={{ base: 'center', md: 'left' }}
        alignItems="center"
        gridGap={2}
      >
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Open in Github
        </Button>
        <Link href={repoLink} isExternal rel="noopener noreferrer">
          <Image
            align="center"
            src="https://img.shields.io/github/stars/sebpalluel/web3-monorepo?style=social"
            alt="github stars"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
