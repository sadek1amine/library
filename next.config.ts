import type { NextConfig } from "next";

<<<<<<< HEAD
// Mock environment variables during build time if they are not defined
const mockEnvVars = {
  QSTASH_TOKEN: "mock_token",
  QSTASH_URL: "https://qstash.upstash.io/v2",
  UPSTASH_REDIS_URL: "https://mock-redis.upstash.io",
  UPSTASH_REDIS_TOKEN: "mock_token",
  NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY: "mock_key",
  IMAGEKIT_PRIVATE_KEY: "mock_key",
  NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT: "https://ik.imagekit.io/mock",
  DATABASE_URL: "postgresql://postgres:postgres@localhost:5432/library_db",
  NEXT_PUBLIC_API_ENDPOINT: "http://localhost:3000",
  NEXT_PUBLIC_PROD_API_ENDPOINT: "http://localhost:3000",
  AUTH_SECRET: "mock_secret_long_enough_to_be_secure_32_chars",
  RESEND_TOKEN: "re_mock_token",
};

for (const [key, value] of Object.entries(mockEnvVars)) {
  if (!process.env[key]) {
    process.env[key] = value;
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
=======
const nextConfig: NextConfig = {
  /* config options here */
>>>>>>> d9c5eb6fff41f6df6bf84e41795f9ec555435116
};

export default nextConfig;
