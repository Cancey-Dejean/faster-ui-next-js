import { cn } from "@/lib/utils";
import Image from "next/image";

type CardWithImageProps = {
  className?: string;
  direction?: "vertical" | "horizontal";
  imgSrc?: string;
  imgWidth?: number;
  imgHeight?: number;
};

export default function CardWithImage({
  className,
  direction,
  imgSrc,
  imgWidth,
  imgHeight,
}: CardWithImageProps) {
  return (
    <div
      className={cn(
        "col-span-3 flex gap-8 rounded-[10px] bg-white px-[26px] py-[29px] text-[#8987A1]",
        className,
        direction === "vertical" ? "flex-col" : "flex-row",
      )}
    >
      <div className="flex flex-col items-start ">
        <div className="mb-[29px] rounded-[10px] bg-[#F5F8FF] p-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 4V5M12 19V20M5.07178 8L5.9378 8.5M18.0622 15.5L18.9282 16M18.9282 7.99999L18.0622 8.49999M5.93781 15.5L5.07178 16M16 12C16 9.79086 14.2091 8 12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12Z"
              stroke="#252432"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mb-[18px] text-xl text-[#252432]">Web Design</h3>
        <p>
          From concept to launch, we create stunning, user-centric websites that
          elevate your brand and engage your audience.
        </p>
      </div>

      {imgSrc && (
        <div className="shrink-0 grow">
          <Image
            src={imgSrc || "/images/card-placeholder.jpg"}
            alt=""
            width={imgWidth || 218}
            height={imgHeight || 218}
            className="h-full w-full rounded-[5px] object-cover"
          />
        </div>
      )}
    </div>
  );
}
