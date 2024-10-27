import Subway from "@/public/subway.png";
import Chipotle from "@/public/chipotle1.png";
import Frostbites from "@/public/frostbites.png";
import Dominoes from "@/public/dominos.png";
import Dunkin from "@/public/dunkin.png";
import Cava from "@/public/cava.png";
import React from "react";
import Image from "next/image";

const Recent = () => {
    return(
        <div className="container mx-auto md:h-screen pl-12 pr-12">
            <p className="text-4xl font-bold text-black text-left mt-20 mb-10">recent orders</p>
        <div className="ml-7 grid grid-cols-3 gap-16">
            <div className="w-[250px] h-[290px] rounded-[30px] shadow-md bg-secondary hover:shadow-xl z-0 pt-7">
            </div>
            <div className="w-[250px] h-[290px] rounded-[30px] shadow-md bg-secondary hover:shadow-xl z-0 pt-7 pl-5">
            </div>
            <div className="w-[250px] h-[290px] rounded-[30px] shadow-md bg-secondary hover:shadow-xl z-0 pt-3">
            </div>
        </div>
        </div>
    )
}

export default Recent;