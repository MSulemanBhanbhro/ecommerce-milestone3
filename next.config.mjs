/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"fakestoreapi.com",
            }
        ]
    },
    images: {
        domains: ['fakestoreapi.com'], // Add the external image domain here
      },
};

export default nextConfig;
