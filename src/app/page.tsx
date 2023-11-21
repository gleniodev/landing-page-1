import { Header } from "@/components/Header";
import { SectionFive } from "@/components/SectionFive";
import { SectionFour } from "@/components/SectionFour";
import { Hero } from "@/components/SectionHero";
import { SectionOne } from "@/components/SectionOne";
import { SectionThree } from "@/components/SectionThree";
import { SectionTwoo } from "@/components/SectionTwoo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwoo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}
