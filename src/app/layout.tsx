import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "components/layout/header";
import Footer from "components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} antialiased container-max`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
