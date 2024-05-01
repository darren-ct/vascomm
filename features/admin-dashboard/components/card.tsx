import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface AdminDashboardCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  category: string;
  title: JSX.Element;
}

export function AdminDashboardCard({
  category,
  title,
  className,
  ...rest
}: AdminDashboardCardProps): JSX.Element {
  return (
    <Card
      className={cn(
        "relative flex-1 flex flex-col gap-1.5 px-7 py-8 rounded-2xl bg-gradient-to-l from-[#C2D6FF] to-[#ADC9FF]",
        className
      )}
      {...rest}
    >
      <p className="text-[#597393]">{category}</p>
      <p className="text-[#002060] text-base">{title}</p>
      <Image
        className="absolute right-0 translate-x-1/2 bottom-[8px]"
        width={55.13}
        height={62.01}
        alt="Right Ellipse"
        src="/admin-dashboard/ellipse-right.png"
      />
      <Image
        className="absolute right-[-8px] bottom-[-12px]"
        width={55.13}
        height={62.01}
        alt="Bottom Right Ellipse"
        src="/admin-dashboard/ellipse-right.png"
      />
    </Card>
  );
}
