/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('next').NextConfig}
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 * */

const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  disable:
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'preview' ||
    process.env.NODE_ENV === 'production',
  // delete two lines above to enable PWA in production deployment
  // add your own icons to public/manifest.json
  // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
  register: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {},
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
};

module.exports = (_phase, { defaultConfig }) => {
  // Workaround https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1248439850
  delete defaultConfig.webpackDevMiddleware;
  delete defaultConfig.configOrigin;
  delete defaultConfig.target;
  delete defaultConfig.webpack5;
  delete defaultConfig.amp.canonicalBase;
  delete defaultConfig.experimental.outputFileTracingRoot;
  delete defaultConfig.i18n;

  const plugins = [withPWA, withNx];
  return plugins.reduce(
    (acc, plugin) => (typeof plugin == 'function' ? plugin(acc) : acc),
    {
      ...defaultConfig,
      ...nextConfig,
    }
  );
};
