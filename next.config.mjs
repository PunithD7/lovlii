/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: false, // ✅ disable Turbopack (fixes Clerk build error)
  },
};

export default nextConfig;

