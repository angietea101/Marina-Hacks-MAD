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
import frostyImage from '../../public/aisu.png'
import dunkyImage from '../../public/dunkn.png'
import gyroImage from '../../public/gyro.png'

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.container}>
      <div className={styles.topWrapper}>
        <Link className={styles.backButton} href="/">
            <div className={styles.backButtonCircle}>
                <div className={`${styles.arrow} ${styles.left}`}></div>
            </div>
        </Link>
        <div className={`${styles.rectangle} flex flex-col pl-0`}>
          <h3 className="text-white font-bold text-xl text-left">
            Find the best orders at your favorite restaurants!
          </h3>
          <p className="font-regular text-white text-left mt-4">
            Scroll through our many vendors we have available to you and more coming soon
          </p>
        </div>
        <img className={styles.image} src={dogImage.src} alt="Dog" />
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

        <div className={styles.rectangleLinkWrapper}>
          <Link href={"vendors/dunkin"}>
            <div className={styles.foodRectangle}>
              <img className={styles.foodRectangleImage} src={dunkyImage.src} alt="Dunkin Donuts" />
            </div>
            <span className={styles.link}>Dunkin Donuts</span>
          </Link>
        </div>

        <div className={styles.rectangleLinkWrapper}>
          <Link href={"vendors/frostbites"}>
            <div className={styles.foodRectangle}>
              <img className={styles.foodRectangleImage} src={frostyImage.src} alt="Frostbites" />
            </div>
            <span className={styles.link}>Frostbites</span>
          </Link>
        </div>

        <div className={styles.rectangleLinkWrapper}>
          <Link href={"vendors/cava"}>
            <div className={styles.foodRectangle}>
              <img className={styles.foodRectangleImage} src={gyroImage.src} alt="Cava" />
            </div>
            <span className={styles.link}>Cava</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
