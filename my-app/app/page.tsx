import Image from "next/image";
import HomePage from "@/components/HomePage";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <HomePage />
    </main>
  );
}
