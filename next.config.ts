import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    domains: ['rickandmortyapi.com'],
    unoptimized: true,
  },
 
 
};

export const config = {
  matcher: ["/","/characters/:path*", "/episodes/:path*", "/locations/:path*"],
};


export default nextConfig;