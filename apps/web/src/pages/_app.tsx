/* eslint-disable react/jsx-props-no-spreading */
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

import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '../lib/components/Chakra';
import Layout from '../lib/layout';
import '../lib/styles/globals.css';
import { useState } from 'react';

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
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <SessionProvider session={pageProps.session}>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
            <Analytics />
          </QueryClientProvider>
        </Layout>
      </SessionProvider>
    </Chakra>
  );
};

export default MyApp;
