import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/bridge-loans",
        destination: "/commercial-loans#bridge",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
