import type { Metadata } from "next";
import '../styles/global.css'
import { Rubik } from "next/font/google";

const rubik = Rubik({ 
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '700'],
  variable: '--font-rubik'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable}>{children}</body>
    </html>
  );
}
