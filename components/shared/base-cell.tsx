"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BaseCellProps = HTMLAttributes<HTMLDivElement>;

export function BaseCell({
  className,
  children,
  ...rest
}: BaseCellProps): JSX.Element {
  return (
    <div className={cn("p-2.5", className)} {...rest}>
      {children}
    </div>
  );
}
