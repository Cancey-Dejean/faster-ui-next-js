"use client";
import Image from "next/image";
import Container from "../Container";
import useEmblaCarousel from "embla-carousel-react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButtons";
import ArrowCircle from "../Icons";
import ReviewPill from "../ReviewPill";

export default function OurWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative">
      <Image
        src="/images/our-work-bg-img.png"
        width={799}
        height={841}
        alt=""
        className="absolute left-1/2 top-0 z-[-1] mx-auto -translate-x-1/2  mix-blend-color-burn"
      />

      <div className="embla three-slide m-auto">
        <Container className="mb-[57px]">
          <div className="mx-auto flex max-w-[987px] items-center justify-between gap-4">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
              <ArrowCircle />
            </PrevButton>

            <div className="text-center">
              <h2 className="mb-9 text-6xl">Check our Work</h2>

              <div className="max-w-[449px] text-sm">
                <p>
                  Take a look at some of our recent projects to see how we've
                  helped businesses like yours succeed online.
                </p>
              </div>
            </div>

            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className="embla__button embla__button--next rotate-180 disabled:opacity-50"
            >
              <ArrowCircle />
            </NextButton>
          </div>
        </Container>

        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="mx-auto rounded-[10px] bg-white p-[34px]">
                <Image
                  src="/images/slider-img.jpg"
                  width={800}
                  height={800}
                  alt=""
                  className="w-full rounded-[5px] shadow-xl"
                />
              </div>
            </div>
            <div className="embla__slide">
              <div className="mx-auto rounded-[10px] bg-white p-[34px]">
                <Image
                  src="/images/slider-img.jpg"
                  width={800}
                  height={800}
                  alt=""
                  className="w-full rounded-[5px] shadow-xl"
                />
              </div>
            </div>
            <div className="embla__slide">
              <div className="mx-auto rounded-[10px] bg-white p-[34px]">
                <Image
                  src="/images/slider-img.jpg"
                  width={800}
                  height={800}
                  alt=""
                  className="w-full rounded-[5px] shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto w-fit rounded-[10px] bg-white p-[34px] shadow-xl">
        <Image
          src="/images/slider-img.jpg"
          width={800}
          height={800}
          alt=""
          className="mx-auto rounded-[5px]"
        />
      </div> */}
      <Container className="flex items-center justify-center py-[86px]">
        <ReviewPill />
      </Container>
    </section>
  );
}
