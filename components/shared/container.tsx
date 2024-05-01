import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({
  className,
  children,
  ...rest
}: ContainerProps): JSX.Element {
  return (
    <div className={cn("mx-auto max-w-[1536px]", className)} {...rest}>
      {children}
    </div>
  );
}
