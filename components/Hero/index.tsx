import Link from "next/link";
import Container from "../Container";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero-bg-img.png"
        width={1169}
        height={924}
        alt=""
        className="mx-auto"
      />
      <Container className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center py-[188px] text-center">
        <h1 className="text-[73px] font-bold leading-none text-[#252432]">
          Awesome UI Dark <br /> Template for <br /> Webflow Agency
        </h1>
        <Button className="mt-9 h-[60px] px-[58px] font-bold" asChild>
          <Link href="#">Get in Touch</Link>
        </Button>
      </Container>
    </section>
  );
}
