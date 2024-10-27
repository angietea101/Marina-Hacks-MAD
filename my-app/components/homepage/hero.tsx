"use client";

import Girl from "@/public/girl icon.png";
import Image from "next/image";
import React from "react"; 

export const Hero = () => {
    return (
       <section className="mr-50 ml-8 bg-primary mb-20">
        <div className="container">
            <div className="flex">
            <div>
                <h1 className="font-teachers font-extrabold w-[600px] h-[150px] ml-20 text-black text-6xl mt-10 mb-10 leading-tight">LET’S GET CUSTOMIZING!</h1>
                <div className="flex items-center justify-between mt-3 pl-40 ">
                    <button className="w-[180px] h-[65px] bg-secondary text-white py-2 px-4 rounded-[28px] hover:shadow-md text-[22px]">create post</button>
                </div>
            </div>
            <div className="mr-20">
                <Image src={Girl} alt="Girl" height={200} width={350} className="object-contain"/>
            </div>
            </div>
        </div>
    </section> 
    )
}

export default Hero;