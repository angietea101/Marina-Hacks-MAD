import Image from "next/image";
import Header from "@/components/homepage/header";
import Hero from "@/components/homepage/hero";
import Features from "@/components/homepage/featured";
import Recent from "@/components/homepage/recent"

export default function Home() {
  return (
    <main className="bg-primary min-h-screen w-full">
      <Header/>
      <Hero/>
      <Features/>
      <Recent/>
    </main>
  );
}
