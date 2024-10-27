
import SessionWrapper from "@/components/SessionWrapper";
import { Session } from "inspector/promises";
import './globals.css'; 
import { Nunito_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { twMerge } from "tailwind-merge";
import styles from './page.module.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights as needed
  variable: '--font-nunito-sans', // Define CSS variable for font
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
    <SessionWrapper>
    <html lang="en">
      <body className={`${styles.container} ${nunitoSans.variable} font-sans`}>
        {children}
        </body>
    </html>
    </SessionWrapper>
  );
}