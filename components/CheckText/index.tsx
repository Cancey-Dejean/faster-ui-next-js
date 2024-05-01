type CheckTextProps = {
  text: string;
};

export default function CheckText({ text }: CheckTextProps) {
  return (
    <div className="flex items-center gap-3 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8 12.25L10.5 14.75L16 9.25M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
          stroke="#252432"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-sm text-[#252432]">{text}</p>
    </div>
  );
}
