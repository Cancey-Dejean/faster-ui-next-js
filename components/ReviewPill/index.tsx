import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const reviewImages = [
  {
    src: "/images/reviewImg.jpg",
    alt: "Avatar",
    name: "John Doe",
  },
  {
    src: "/images/reviewImg.jpg",
    alt: "Avatar",
    name: "John Doe",
  },
  {
    src: "/images/reviewImg.jpg",
    alt: "Avatar",
    name: "John Doe",
  },
  {
    src: "/images/reviewImg.jpg",
    alt: "Avatar",
    name: "John Doe",
  },
  {
    src: "/images/reviewImg.jpg",
    alt: "Avatar",
    name: "John Doe",
  },
];

type ReviewPillProps = {
  className?: string;
};

export default function ReviewPill({ className }: ReviewPillProps) {
  return (
    <div className="flex w-fit items-center justify-center gap-3 rounded-[22px] border border-[#E4EAF8] bg-white p-[23px]">
      <div className="flex [&_img]:-ml-2">
        {reviewImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={37}
            height={37}
            className="rounded-full border-2 border-white"
            style={{ zIndex: reviewImages.length - index }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <div className="[&_strong]:text-[#252432]">
          <p>
            <strong>5.0</strong> Based on <strong>145</strong> Reviews
          </p>
        </div>

        <div className="flex gap-[6px]">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <IoStarSharp key={index} className="text-[#F7C33D]" />
            ))}
        </div>
      </div>
    </div>
  );
}
