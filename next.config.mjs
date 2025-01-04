/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
        },
      ],
      domains: ['fakestoreapi.com'], // Adding this as well to ensure both remote patterns and domains work
    },
  };
  
  export default nextConfig;
  