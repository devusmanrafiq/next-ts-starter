import type { Metadata } from "next";

import Footer from "components/layout/footer";
import Header from "components/layout/header";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const productSans = localFont({
  src: "../../public/fonts/ProductSans.ttf",
  variable: "--font-product-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: "Title",
  description: "Title",
  icons: {
    icon: [
      {
        // media: "(prefers-color-scheme: dark)",
        url: "/public/images/favicon.ico",
        href: "/public/images/favicon.ico",
      },
      // {
      //   media: "(prefers-color-scheme: light)",
      //   url: "/images/favicon-dark.png",
      //   href: "/images/favicon-dark.png",
      // },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`container-max ${productSans.variable} ${poppins.variable} ${productSans.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
