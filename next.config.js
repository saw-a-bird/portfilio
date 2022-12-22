/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const { i18n } = require('./next-i18next.config.js')

module.exports = {
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  assetPrefix: isProd ? "/portfilio/" : "",
  /**
   * Disable server-based image optimization.
   *
   * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
   */
  i18n,
  images: {
    unoptimized: true,
  },
};
