import React from "react";
import Container from "../Container";
import Image from "next/image";
import { AccordionBlock } from "../AccordionBlock";

const Faqs = [
  {
    id: 1,
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 3,
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 4,
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 5,
    title: "It accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

export default function Faq() {
  return (
    <section className="relative overflow-x-hidden">
      <Image
        src="/images/ring-coil.png"
        className="relative -left-[202px] mr-auto mix-blend-color-burn"
        width={765}
        height={726}
        alt=""
      />
      <Container className="absolute left-1/2 top-1/2 grid w-full max-w-[1043px] -translate-x-1/2 -translate-y-1/2 grid-cols-12 grid-rows-2 items-center gap-8">
        <div className="col-span-5 row-span-2">
          <h2 className="mb-4 text-6xl">Frequently Asked Questions</h2>
        </div>

        <div className="col-span-7 col-start-7 row-span-2">
          <AccordionBlock data={Faqs} />
        </div>
      </Container>
    </section>
  );
}
