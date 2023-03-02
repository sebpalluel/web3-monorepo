/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'web3-monorepo',
  titleTemplate: '%s | web3-monorepo',
  defaultTitle: 'web3-monorepo',
  description:
    '⚡️ Get started with your Web3 project,🔋 included: 🌈 Web3Auth & Biconomy for non-custodial Social Login and Account Abstraction, 🗂 monorepo with NX, 💻 Next.js + Next Auth + ChakraUI + Storybook for the frontend, 💾 Hasura GraphQL server and Nest.js for the backend, 🔮 The Graph protocol to query live data from smart contracts.',
  canonical: 'https://www.web3-monorepo.app/',
  openGraph: {
    url: 'https://www.web3-monorepo.app/',
    title: 'web3-monorepo',
    description:
      '⚡️ Get started with your Web3 project,🔋 included: 🌈 Web3Auth & Biconomy for non-custodial Social Login and Account Abstraction, 🗂 monorepo with NX, 💻 Next.js + Next Auth + ChakraUI + Storybook for the frontend, 💾 Hasura GraphQL server and Nest.js for the backend, 🔮 The Graph protocol to query live data from smart contracts.',
    images: [
      // TODO, update with hosted image
      {
        url: 'https://og-image.dev/**web3-monorepo**.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: 'web3-monorepo.dev og-image',
      },
    ],
    site_name: 'web3-monorepo',
  },
};

export default defaultSEOConfig;
