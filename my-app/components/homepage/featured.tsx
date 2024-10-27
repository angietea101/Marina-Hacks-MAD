import Subway from "@/public/subway.png";
import Chipotle from "@/public/chipotle1.png";
import Frostbites from "@/public/frostbites.png";
import Dominoes from "@/public/dominos.png";
import Dunkin from "@/public/dunkin.png";
import Cava from "@/public/cava.png";
import React from "react";
import Image from "next/image";

const Features = () => {
    return(
        <div className="container mx-auto">
            <p className="text-4xl font-bold text-black text-left mb-10">featured restaurants</p>
        <div className="ml-7 grid grid-cols-6 gap-8">
            <div className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pt-7">
                <Image src={Subway} alt="Subway" height={200} width={200} className="bottom-0 right-0"/>
            </div>
            <div className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pt-7 pl-5">
                <Image src={Chipotle} alt="Chipotle" height={100} width={100} className="bottom-0 right-0"/>
            </div>
            <div className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pt-3">
                <Image src={Dominoes} alt="Dominoes" height={200} width={200} className="bottom-0 right-0"/>
            </div>
            <div className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pt-2 pl-5">
                <Image src={Dunkin} alt="Dunkin Donuts" height={100} width={100} className="bottom-0 right-0"/>
            </div>
            <div className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pt-8 pl-4">
                <Image src={Frostbites} alt="Frostbites" height={100} width={100} className="bottom-0 right-0"/>
            </div>
            <div className="w-[140px] h-[170px] rounded-[100px] shadow-md bg-white hover:shadow-xl hover:bg-secondary border-4 border-secondary z-0 pt-16 pl-5">
                <Image src={Cava} alt="Cava" height={100} width={100} className="bottom-0 right-0"/>
            </div>
        </div>
        </div>
    )
}

export default Features;