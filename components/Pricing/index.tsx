import Link from "next/link";
import Container from "../Container";
import { Button } from "../ui/button";
import CheckText from "../CheckText";

export default function Pricing() {
  return (
    <section className="text-sm">
      <Container className="grid max-w-[1043px] grid-cols-12 grid-rows-2 gap-x-8">
        <div className="col-span-5 col-start-2 flex flex-col justify-end">
          <div className="mb-[81px] ">
            <h2 className="mb-4 text-6xl">Pricing</h2>
            <div className="max-w-[282px]">
              <p>
                Take a look at some of our recent projects to see how we've
                helped businesses like yours succeed online.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-5 col-start-2 flex flex-col gap-8 rounded-[20px] bg-white px-[26px] py-[37px]">
          <h3 className="text-[34px] leading-[40px]">
            Let's Schedule <br /> a Meeting
          </h3>
          <Button className="h-12 bg-[#4E47FF] px-9 font-bold" asChild>
            <Link href="#">Schedule Meeting</Link>
          </Button>
        </div>

        <div className="col-span-7 col-start-7 row-span-2 row-start-1 rounded-[20px] bg-white px-[50px] py-[43px]">
          <h4 className="mb-[31px] text-[30px] leading-[36px]">
            Unlimited Services
          </h4>

          <div className="max-w-[384px] leading-[21px]">
            <p>
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </p>
          </div>

          <div className="mt-[41px] grid grid-cols-2 gap-[18px]">
            <CheckText text="Unlimited projects" />
            <CheckText text="Unlimited projects" />
            <CheckText text="Unlimited projects" />
            <CheckText text="Unlimited projects" />
            <CheckText text="Unlimited projects" />
            <CheckText text="Unlimited projects" />
          </div>

          <div className="link-block group mt-[42px] flex items-center justify-between gap-5 rounded-[10px] bg-[#F5F8FF] px-[42px] py-[28px] transition-transform hover:scale-105">
            <div className="flex items-end">
              <span className="text-6xl font-bold text-[#252432]">$3,250</span>
              <span className="mb-2 text-[20px]">/mo</span>
            </div>

            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:md:scale-150"
              >
                <path
                  d="M5 12H19M19 12L16 15M19 12L16 9"
                  stroke="#252432"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
