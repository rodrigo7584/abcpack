import type { Metadata } from "next";

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/global.css'
import { Rubik } from "next/font/google";

const rubik = Rubik({ 
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '700'],
  variable: '--font-rubik'
});

export const metadata: Metadata = {
  title: "ABC Pack",
  description: "Embalagens personalizadas são ABC Pack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={rubik.variable}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
