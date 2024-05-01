import { queryGlobalSettings, queryHomePage } from "@/api/hygraph";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import Pricing from "@/components/Pricing";
import WhatWeDo from "@/components/WhatWeDo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data: any = await queryHomePage();

  console.log(data.page);

  return {
    title: data.page.metaTitle,
    description: data.page.description,
    openGraph: {
      // images: [data.page.og_image.url || ""],
    },
  };
}

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
