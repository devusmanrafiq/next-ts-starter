import type { Metadata } from 'next';

import Footer from 'components/layout/footer';
import Header from 'components/layout/header';

import '../../public/fonts/product-sans/fonts.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Title',
  description: 'Title',
  icons: {
    icon: [
      {
        // media: "(prefers-color-scheme: dark)",
        url: '/images/favicon.ico',
        href: '/images/favicon.ico',
      },
      // {
      //   media: "(prefers-color-scheme: light)",
      //   url: "/images/favicon-dark.png",
      //   href: "/images/favicon-dark.png",
      // },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font-primary container-max'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
