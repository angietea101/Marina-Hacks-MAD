import SessionWrapper from "@/components/SessionWrapper";
import './globals.css'; 
import { Nunito_Sans} from 'next/font/google';
import Head from 'next/head';
import type { Metadata } from 'next';
import { twMerge } from "tailwind-merge";
import styles from './page.module.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed for Nunito Sans
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${styles.container} ${nunitoSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
