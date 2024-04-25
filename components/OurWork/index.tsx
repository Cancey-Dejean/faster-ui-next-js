import Image from "next/image";
import Container from "../Container";

export default function OurWork() {
  return (
    <section className="relative mb-[86px]">
      <Image
        src="/images/our-work-bg-img.png"
        width={799}
        height={841}
        alt=""
        className="absolute left-1/2 top-0 z-[1] mx-auto -translate-x-1/2  mix-blend-color-burn"
      />
      <Container className="mb-[57px]">
        <div className="mx-auto flex max-w-[987px] items-center justify-between gap-4">
          <button type="button">
            <svg
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="38.5" fill="white" stroke="white" />
              <path
                d="M46 39H32M32 39L35 42M32 39L35 36"
                stroke="#252432"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div className="text-center">
            <h2 className="mb-9 text-6xl">Check our Work</h2>

            <div className="max-w-[449px] text-sm text-[#8987A1]">
              <p>
                Take a look at some of our recent projects to see how we've
                helped businesses like yours succeed online.
              </p>
            </div>
          </div>

          <button type="button" className="rotate-180">
            <svg
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="38.5" fill="white" stroke="white" />
              <path
                d="M46 39H32M32 39L35 42M32 39L35 36"
                stroke="#252432"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      <div className="mx-auto w-fit rounded-[10px] bg-white p-[34px] shadow-xl">
        <Image
          src="/images/slider-img.jpg"
          width={800}
          height={800}
          alt=""
          className="mx-auto"
        />
      </div>
    </section>
  );
}
