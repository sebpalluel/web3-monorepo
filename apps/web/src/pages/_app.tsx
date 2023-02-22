/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  type DehydratedState,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import toast from 'react-hot-toast';
import {
  chain,
  ChainDoesNotSupportMulticallError,
  ChainProviderFn,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
// import { InjectedConnector } from 'wagmi/connectors/injected';
// import { mainnet, polygon, arbitrum, goerli } from 'wagmi/chains';

import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '../lib/components/Chakra';
import Layout from '../lib/layout';
import '../lib/styles/globals.css';

const web3_providers: ChainProviderFn[] = [publicProvider()];
/* TODO Get error here on production build, need to check if it's a bug in wagmi or nextjs (maybe try wagmi 0.9 with InjectedConnector)
if (process.env.NEXT_PUBLIC_ALCHEMY_ETHEREUM_MAINNET_TOKEN)
  web3_providers.push(
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ETHEREUM_MAINNET_TOKEN,
    })
  );
if (process.env.NEXT_PUBLIC_ALCHEMY_POLYGON_MAINNET_TOKEN)
  web3_providers.push(
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_POLYGON_MAINNET_TOKEN,
    })
  );
if (process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_MAINNET_TOKEN)
  web3_providers.push(
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_MAINNET_TOKEN })
  );
*/

const testnetChains = [chain.goerli, chain.polygonMumbai];

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon, ...testnetChains],
  web3_providers
);

const wagmiClient = createClient({
  autoConnect: false, // TODO check if work properly with biconomy or unipass
  // connectors: [new InjectedConnector({ chains })],
  provider,
  webSocketProvider,
});

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
  dehydratedState: DehydratedState;
}>) => {
  // https://tanstack.com/query/v4/docs/guides/ssr?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/ssr#using-nextjs
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error: Error, query) => {
            // 🎉 only show error toasts if we already have data in the cache
            // which indicates a failed background update
            if (query.state.data !== undefined) {
              toast.error(error.message);
            }
          },
        }),
      })
  );
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <SessionProvider session={pageProps.session}>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout chains={chains}>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
              <ReactQueryDevtools initialIsOpen={false} />
              <Analytics />
            </QueryClientProvider>
          </Layout>
        </SessionProvider>
      </WagmiConfig>
    </Chakra>
  );
};

export default MyApp;
