/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow loading fonts/images from Vercel Blob storage
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
