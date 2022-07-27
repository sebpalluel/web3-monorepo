/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "@web/lib/components/Chakra";
import Layout from "@web/lib/layout";
import "@web/lib/styles/globals.css";
import { useState } from "react";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
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
      <SessionProvider session={session}>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Layout>
      </SessionProvider>
    </Chakra>
  );
};

export default MyApp;
