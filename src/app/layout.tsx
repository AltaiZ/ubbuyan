import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import HeaderTop from "../components/HeaderTop";
import Footer from "../components/Footer";
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
        <link rel="stylesheet" href="/static/css/gallery_styles.css" />
        <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="/static/css/gerege/gerege.css" />
        <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/static/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/static/css/styles.css" />
        <link rel="stylesheet" href="/static/css/font-awesome.css" />
        <link rel="stylesheet" href="/static/css/mobile.css" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className={inter.className}>
        <HeaderTop />
        {children}
        <Footer />
        <Script src="/static/js/scripts.js" />
        <Script src="/static/js/custom.js" />
        {/* <Script src="/static/js/owl.carousel.min.js" /> */}
        {/* <Script src="/static/bootstrap/js/bootstrap.min.js" /> */}
      </body>
    </html>
  );
}
