/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tobem.api.erxes.io"],
  },
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN:
      "https://ulaanbaatarbuyan.api.erxes.io/gateway",
    NEXT_PUBLIC_WS_DOMAIN: "wss://ulaanbaatarbuyan.api.erxes.io/api/graphql",
    NEXT_PUBLIC_POS_TOKEN: "EjpiijsJBYxsE5TqzxAJgJNeUl9Qj5u9",
    NEXT_PUBLIC_CP_ID: "4-0OUgB_LJU-Wgarnca1H",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkFkbWluIiwiY3JlYXRlZEF0IjoiMjAyNS0wOS0yNVQwMToxNzoyNy4zNDZaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI1LTEwLTI5VDAyOjUwOjMwLjA4NloiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJOX0NnY1poa0Q2d2drUW9jLXpCcDciLCJfX3YiOjB9LCJpYXQiOjE3NTkxMTQyNDB9.loQHEL51FeaeJ9eKHlDAtPLoXv_KZbMTeVS0K94tFSs",
  },
  transpilePackages: ['@egjs/react-view360', '@egjs/view360', '@egjs/imready'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
    };
    return config;
  },
};

export default nextConfig;
