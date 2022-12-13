/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  RainbowKitProvider,
  getDefaultWallets,
  lightTheme,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  ChainProviderFn,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
// import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { RainbowKitSiweNextAuthProvider } from '../lib/components/RainbowKitSiweNextAuthProvider';
import '@rainbow-me/rainbowkit/styles.css';
// import { InjectedConnector } from 'wagmi/connectors/injected';
// import { mainnet, polygon, arbitrum, goerli } from 'wagmi/chains';

import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '../lib/components/Chakra';
import Layout from '../lib/layout';
import '../lib/styles/globals.css';

const web3_providers: ChainProviderFn[] = [publicProvider()];
// if (process.env.NEXT_PUBLIC_ALCHEMY_ETHEREUM_MAINNET_TOKEN)
//   web3_providers.push(
//     alchemyProvider({
//       apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ETHEREUM_MAINNET_TOKEN,
//     })
//   );
// if (process.env.NEXT_PUBLIC_ALCHEMY_POLYGON_MAINNET_TOKEN)
//   web3_providers.push(
//     alchemyProvider({
//       apiKey: process.env.NEXT_PUBLIC_ALCHEMY_POLYGON_MAINNET_TOKEN,
//     })
//   );
// if (process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_MAINNET_TOKEN)
//   web3_providers.push(
//     alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_MAINNET_TOKEN })
//   );

const { chains, provider, webSocketProvider } = configureChains(
  // , ...(isDev() ? [chain.goerli] : [])
  [chain.mainnet, chain.polygon, chain.arbitrum],
  web3_providers
);

const { connectors } = getDefaultWallets({
  appName: 'Web3 Monorepo',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  // connectors: [new InjectedConnector({ chains })],
  provider,
  webSocketProvider,
});
const rainbowKitProviderConfig = {
  chains,
  theme: {
    lightMode: lightTheme({
      accentColor: '#3B72F2',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    }),
    darkMode: darkTheme({
      accentColor: '#3B92F2',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    }),
  },
};

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
  dehydratedState: DehydratedState;
}>) => {
  // https://tanstack.com/query/v4/docs/guides/ssr?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/ssr#using-nextjs
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider>
          <RainbowKitProvider {...rainbowKitProviderConfig}>
            <Chakra>
              <Head>
                <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
              </Head>
              <DefaultSeo {...defaultSEOConfig} />
              <Layout>
                <QueryClientProvider client={queryClient}>
                  <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                  </Hydrate>
                  <ReactQueryDevtools initialIsOpen={false} />
                  <Analytics />
                </QueryClientProvider>
              </Layout>
            </Chakra>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
};

export default MyApp;
