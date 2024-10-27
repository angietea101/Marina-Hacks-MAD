import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'
import styles from "./page.module.css"
import dogImage from "../../public/dog.png"
import Link from 'next/link';
import subwayImage from '../../public/subway-background.png'
import chipotleImage from '../../public/chipotle-background.jpg'
import dominosImage from '../../public/dominos-background.jpg'

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.container}>
      <div className={styles.topWrapper}>
        <div className={styles.rectangle}>
          <h3>
            Find the best orders at your favorite restaurants! 
          </h3>
        </div>
        <img className={styles.image} src={dogImage.src} />
      </div>
      <div className={styles.foodItems}>
        <div className={styles.rectangleLinkWrapper}>
          <Link href={"vendors/subway"}>
            <div className={styles.foodRectangle}>
              <img className={styles.foodRectangleImage} src={subwayImage.src} alt="Subway" />
            </div>
            <span className={styles.link}>Subway</span>
          </Link>
        </div>
        <div className={styles.rectangleLinkWrapper}>
          <Link href={"vendors/chipotle"}>
            <div className={styles.foodRectangle}>
              <img className={styles.foodRectangleImage} src={chipotleImage.src} alt="Chipotle" />
            </div>
            <span className={styles.link}>Chipotle</span>
          </Link>
        </div>
        <div className={styles.rectangleLinkWrapper}>
          <Link href={"vendors/dominos"}>
            <div className={styles.foodRectangle}>
              <img className={styles.foodRectangleImage} src={dominosImage.src} alt="Dominos" />
            </div>
            <span className={styles.link}>Dominos</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;