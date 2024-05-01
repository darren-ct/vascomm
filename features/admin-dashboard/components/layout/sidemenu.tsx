"use client";

import { Button } from "@/components/ui/button";
import { adminMenus } from "../../utils";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function SideMenu(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 h-full w-[245px] py-[18px] bg-white">
      {adminMenus.map((item) => {
        const isActive = pathname.includes(item.path);
        const Icon = item.icon;

        return (
          <Button
            key={item.path}
            variant="ghost"
            className={cn(
              "flex flex-row justify-start items-center gap-3 px-5 py-2.5 w-full h-min rounded-none transition",
              isActive && "bg-primary"
            )}
            onClick={() => router.push(`/admin${item.path}`)}
          >
            <Icon size={24} className={cn(isActive && "text-white")} />
            <p className={cn(isActive && "text-white font-semibold")}>
              {item.text}
            </p>
          </Button>
        );
      })}
    </div>
  );
}
