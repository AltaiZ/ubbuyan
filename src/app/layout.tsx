import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import HeaderTop from "../components/HeaderTop";
import Footer from "../components/Footer";
import Apollo from "./apolloClient";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "“УЛААНБААТАР БУЯН” ХХК",
  description: "“УЛААНБААТАР БУЯН” ХХК",
  icons: {
    icon: "/static/images/blue_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/static/images/blue_logo.png" />
        <link rel="shortcut icon" href="/static/images/blue_logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/static/images/blue_logo.png" />
        <link rel="stylesheet" href="/static/css/gallery_styles.css" />
        <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="/static/css/gerege/gerege.css" />
        <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/static/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/static/css/styles.css" />
        <link rel="stylesheet" href="/static/css/font-awesome.css" />
        <link rel="stylesheet" href="/static/css/mobile.css" />
 
      </head>
      <body className={inter.className}>
        <Apollo>
          <HeaderTop />
          {children}
          <Footer />
          <Script src="/static/js/scripts.js" />
          <Script src="/static/js/custom.js" />
          <Toaster richColors closeButton position="top-left"/>
        </Apollo>
      </body>
    </html>
  );
}
