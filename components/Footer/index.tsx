import Image from "next/image";
import Container from "../Container";
import background from "/public/images/footer-gradient.png";

export default function Footer() {
  return (
    <footer
      className=" relative bg-bottom py-[124px]"
      style={{
        backgroundImage: `url(../public/images/footer-gradient.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>Footer</Container>
      {/* <div className="relative left-1/2 h-[1228px] w-[2000px] -translate-x-1/2">
        <Image src="/images/footer-gradient.png" alt="Footer" fill />
      </div> */}
    </footer>
  );
}
