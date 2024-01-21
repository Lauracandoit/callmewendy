/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  basePath: "/callmewendy",
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
