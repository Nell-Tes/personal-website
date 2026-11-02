/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Export plain HTML so the site can be hosted on GitHub Pages.
  output: 'export',
};

module.exports = nextConfig;
