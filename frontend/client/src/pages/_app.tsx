/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import defaultSEOConfig from '../../next-seo.config'
import { Chakra } from 'lib/components/Chakra'
import Layout from 'lib/layout'
import 'lib/styles/globals.css'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
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
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>
        </Chakra>
    )
}

export default MyApp
