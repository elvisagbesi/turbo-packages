import { Lato } from 'next/font/google';
import Script from 'next/script';
import React from 'react';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/4ca6929630.js"
        crossOrigin="anonymous"
      />
      <div className={`scroll-smooth antialiased ${lato.className} h-full`}>
        {children}
      </div>
    </>
  );
}
