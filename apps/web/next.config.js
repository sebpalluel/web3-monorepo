/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('next').NextConfig}
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 * */
module.exports = withNx(
  withPWA({
    pwa: {
      disable:
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'preview' ||
        process.env.NODE_ENV === 'production',
      // delete two lines above to enable PWA in production deployment
      // add your own icons to public/manifest.json
      // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
      dest: 'public',
      register: true,
    },
    swcMinify: true,
    reactStrictMode: true,
    // eslint: {
    //   dirs: ["src"],
    // },
    nx: {
      // Set this to true if you would like to to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: false,
    },
  })
);
