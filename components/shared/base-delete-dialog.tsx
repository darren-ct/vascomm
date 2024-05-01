"use client";

import { BaseDialog } from "@/components/shared/base-dialog";
import { Button } from "@/components/ui/button";
import { ToggleRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

interface BaseDeleteDialog {
  title: string;
  description: string;
  actions: JSX.Element;
  trigger: JSX.Element;
}

export function BaseDeleteDialog({
  title,
  description,
  actions,
  trigger,
}: BaseDeleteDialog): JSX.Element {
  return (
    <BaseDialog
      classNames={{ content: "p-0" }}
      content={
        <div className="relative">
          <Image
            width={496}
            height={100}
            alt="Top Ellipse"
            src="/top-ellipse.png"
            className="absolute top-0"
          />
          <div className="flex flex-col items-center pt-11 pb-7 px-10 border-b">
            <div className="bg-[#D83A56] px-4 py-4 rounded-full mb-[30px] shadow-lg z-10">
              <ToggleRightIcon size={40} className="text-white" />
            </div>
            <p className="text-2xl font-semibold mb-[18px]">{title}</p>
            <p className="text-base text-[#A4A4A4]">{description}</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-[30px] px-10 py-8">
            {actions}
          </div>
        </div>
      }
      trigger={trigger}
    />
  );
}
