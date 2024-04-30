import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import Pricing from "@/components/Pricing";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurWork />
      <Pricing />
      <Faq />
    </>
  );
}
