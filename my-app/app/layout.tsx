import SessionWrapper from "@/components/SessionWrapper";
import './globals.css'; 
import { Nunito_Sans} from 'next/font/google';
import type { Metadata } from 'next';
import styles from './page.module.css'
import Header from "@/components/homepage/header";


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
    <SessionWrapper>
      <html lang="en">
        <body className={`${styles.container} ${nunitoSans.variable} font-sans`}>
          <Header />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
