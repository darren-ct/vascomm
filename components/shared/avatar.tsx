"use client";

import { PowerIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function Avatar(): JSX.Element {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-10 h-10 rounded-full bg-slate-300 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="bg-white py-[17px] px-0">
        <div className="flex flex-col gap-2 items-center pb-4 border-b">
          <div className="w-[60px] h-[60px] rounded-full bg-slate-300" />
          <div>
            <p className="text-center">Darren Christian</p>
            <p className="text-[10px] text-center">darren0208.dc@gmail.com</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="gap-2 w-full h-min pt-4 pb-5 text-red-500 hover:text-red-500 text-xs"
        >
          <PowerIcon size={24} />
          KELUAR
        </Button>
      </PopoverContent>
    </Popover>
  );
}
