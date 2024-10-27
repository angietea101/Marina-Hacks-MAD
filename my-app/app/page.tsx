import Image from "next/image";
import Header from "@/components/homepage/header";
import Hero from "@/components/homepage/hero";
import Features from "@/components/homepage/featured";
import Recent from "@/components/homepage/recent"
import styles from './page.module.css'

export default function Home() {
  return (
      <main className={styles.container}>
        <Header/>
        <Hero/>
        <Features/>
        <Recent/>
      </main>
  );
}
