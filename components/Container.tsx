import { cn } from "../lib/utils";

type ContainerProps = {
  as?: React.ElementType;
  size?: "base" | "contained" | "wide";
  className?: string;
  children: React.ReactNode;
};

const containerSizes = {
  base: "max-w-[1217px]",
  contained: "max-w-2xl",
  wide: "max-w-4xl",
};

export default function Container({
  as: Comp = "div",
  className,
  size = "base",
  children,
  ...restProps
}: ContainerProps) {
  return (
    <Comp
      className={cn("mx-auto w-full", containerSizes[size], className)}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
