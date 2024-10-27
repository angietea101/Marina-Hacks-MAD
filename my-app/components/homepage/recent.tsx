import React from "react";
import Image from "next/image";
import Pizza from "@/public/pizzaaa.png"
import cavaBowl from "@/public/cava_bowl.jpg"
import Coffee from "@/public/custom_coffee.jpg"
import styles from './recent.module.css'
import frostBites from "@/public/frostbites.jpg"

const Recent = () => {
    return(
        <div className="container mx-auto md:h-screen pl-12 pr-12">
            <p className="text-4xl font-bold text-black text-left mt-20 mb-10">recent orders</p>
        <div className="grid grid-cols-4 gap-5">
            <div className={styles.foodRectangle}>
                <img className={styles.foodRectangleImage} src={cavaBowl.src}></img>
            </div>
            <div className={styles.foodRectangle}>
                <img className={styles.foodRectangleImage} src={Pizza.src}></img>
            </div>
            <div className={styles.foodRectangle}>
                <img className={styles.foodRectangleImage} src={Coffee.src}></img>
            </div>
            <div className={styles.foodRectangle}>
                <img className={styles.foodRectangleImage} src={frostBites.src}></img>
            </div>
        </div>
        </div>
    )
}

export default Recent;