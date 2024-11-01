import Subway from "@/public/subway.png";
import Chipotle from "@/public/chipotle1.png";
import Frostbites from "@/public/frostbites.png";
import Dominoes from "@/public/dominos.png";
import Dunkin from "@/public/dunkin.png";
import Cava from "@/public/cava.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './featured.module.css'

const Features = () => {
    return(
        <div className="container mx-auto pl-12 pr-12">
            <div className={styles.featuredTitle}>
                <p className="text-4xl font-bold text-black">featured food spots</p>
                <Link href={"vendors"}>
                    <p className="text-2xl font-regular text-black">Browse All</p>
                </Link>
            </div>
        <div className="ml-7 grid grid-cols-6 gap-8">
            <Link href = "vendors/subway">
                <button className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0">
                    <Image src={Subway} alt="Subway" height={200} width={200} className="bottom-0 right-0"/>
                </button>
            </Link>
            <Link href = "vendors/chipotle">
                <button className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pl-4">
                    <Image src={Chipotle} alt="Chipotle" height={100} width={100} className="bottom-0 right-0"/>
                </button>
            </Link>
            <Link href = "vendors/dominos">
                <button className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pt-3">
                    <Image src={Dominoes} alt="Dominoes" height={200} width={200} className="bottom-0 right-0"/>
                </button>
            </Link>
            <button className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pb-2 pl-5">
                <Image src={Dunkin} alt="Dunkin Donuts" height={100} width={100} className="bottom-0 right-0"/>
            </button>
            <button className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pl-4">
                <Image src={Frostbites} alt="Frostbites" height={100} width={100} className="bottom-0 right-0"/>
            </button>
            <button className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pl-4">
                <Image src={Cava} alt="Cava" height={100} width={100} className="bottom-0 right-0"/>
            </button>

        </div>
        </div>
    )
}

export default Features;