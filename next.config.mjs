/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tobem.api.erxes.io"],
  },
  env: {
    ERXES_API_URL: "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/graphql",
    ERXES_URL: "https://ulaanbaatarbuyanmn.next.erxes.io/gateway",
    ERXES_FILE_URL:
      "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/read-file?key=",
    ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6ImVRUkthUzUwMk9ZaWduOE14b29naSIsImlhdCI6MTc3MjAwMzcyOH0.QQ1zGyIgA3gQyFtsvvDOv6rD1GSty2swB7hOcy5t9wU",
  },

  transpilePackages: ["@egjs/react-view360", "@egjs/view360", "@egjs/imready"],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    };
    return config;
  },
};

export default nextConfig;
