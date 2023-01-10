/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.vox-cdn.com", "i0.wp.com"],
  },
};

module.exports = nextConfig;
