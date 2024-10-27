import React from "react";
import Image from "next/image";
import Pizza from "@/public/pizzaaa.png"
import cavaBowl from "@/public/cava_bowl.jpg"
import Coffee from "@/public/custom_coffee.jpg"

const Recent = () => {
    return(
        <div className="container mx-auto md:h-screen pl-12 pr-12">
            <p className="text-4xl font-bold text-black text-left mt-20 mb-10">recent orders</p>
        <div className="ml-7 grid grid-cols-3 gap-16">
            <div className="w-[250px] h-[290px] rounded-[30px] shadow-md bg-secondary hover:shadow-xl z-0 pt-7">
            <Image src={Pizza} alt= "Pizza" height={100} width={100} className="bottom-0 right-0"/>
            </div>
            <div className="w-[250px] h-[290px] rounded-[30px] shadow-md bg-secondary hover:shadow-xl z-0 pt-7 pl-5">
            <Image src={cavaBowl} alt= "cava bowl" height={200} width={200} className="rounded-[28px]"/>
            </div>
            <div className="w-[250px] h-[290px] rounded-[30px] shadow-md bg-secondary hover:shadow-xl z-0 pt-3">
            <Image src={Coffee} alt= "dunkin coffee" height={200} width={200} className="rounded-[28px] ml-7"/>
            </div>
        </div>
        </div>
    )
}

export default Recent;