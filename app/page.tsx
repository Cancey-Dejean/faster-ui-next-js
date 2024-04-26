import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import ReviewPill from "@/components/ReviewPill";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurWork />
    </>
  );
}
