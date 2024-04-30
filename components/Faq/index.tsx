import React from "react";
import Container from "../Container";
import Image from "next/image";

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
      <Container className="absolute left-1/2 top-1/2 grid w-full max-w-[1043px] -translate-x-1/2 -translate-y-1/2 grid-cols-12 grid-rows-2 gap-8 ">
        <div className="col-span-5">
          <h2>Title</h2>
        </div>

        <div className="col-start-7">Faq</div>
      </Container>

      {/* <div className="col-start-6">Faqs</div> */}
    </section>
  );
}
