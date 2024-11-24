/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tobem.api.erxes.io"],
  },
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN:
      "https://ulaanbaatarbuyan.app.erxes.io/gateway",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6InVsYWFuYmFhdGFyYnV5YW4iLCJjcmVhdGVkQXQiOiIyMDI0LTExLTIwVDAwOjA4OjM3Ljg4OFoiLCJ1c2VyR3JvdXBJZCI6IjRFSHlkVERBaXMyTGRRblpuIiwiZXhwaXJlRGF0ZSI6IjIwMjQtMTItMjBUMDY6MTM6MDcuMTE4WiIsIm5vRXhwaXJlIjpmYWxzZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjpmYWxzZSwiX2lkIjoiWUpiZHliR25tSUJGOHR0bFZURUJXIiwiX192IjowfSwiaWF0IjoxNzMyMDgzMjIzLCJleHAiOjM0NjY3NTg0MTB9.L6qLzYonhgE6LPm4HULCrzaxXk5XRNfLU8CVknO55lI",
  },
};

export default nextConfig;
