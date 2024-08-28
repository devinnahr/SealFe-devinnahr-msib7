// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps in identifying potential issues
  images: {
    domains: ['cdn.cnnindonesia.com', 'akcdn.detik.net.id', 'tailwindui.com'],
  },
  swcMinify: true, // Enables SWC-based minification for faster builds
  // Add other configurations as needed
};

export default nextConfig;
