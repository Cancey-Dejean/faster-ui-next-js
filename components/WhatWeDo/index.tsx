import React from "react";
import Container from "../Container";
import CardWithImage from "../CardWithImage";

export default function WhatWeDo() {
  return (
    <section className="-mt-[250px] mb-[130px]">
      <Container>
        <h2 className="mb-9 text-6xl">What We Do</h2>

        <div className="grid grid-cols-12 gap-8">
          <CardWithImage />
          <CardWithImage />
          <CardWithImage />
          <CardWithImage
            className="row-span-2"
            imgSrc="/images/card-placeholder2.jpg"
            direction="vertical"
          />
          <CardWithImage
            className="col-span-6"
            imgSrc="/images/card-placeholder.jpg"
          />
          <CardWithImage />
        </div>
      </Container>
    </section>
  );
}
