import { Container } from "@/components/shared/container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function CustomerHomeHero(): JSX.Element {
  return (
    <Container className="flex flex-col gap-4 py-8 px-[100px]">
      <Image
        src="/customer-home/hero.png"
        width={1006}
        height={331}
        alt="Customer Home Hero Image"
        className="w-full"
      />
      <div className="flex flex-row items-center gap-2.5">
        <ChevronLeft className="text-[#A19B91] cursor-pointer" />
        <div className="w-2 h-2 rounded-full bg-[#A19B91] cursor-pointer" />
        <div className="w-2 h-2 rounded-full bg-[#F9F9F9] cursor-pointer" />
        <div className="w-2 h-2 rounded-full bg-[#F9F9F9] cursor-pointer" />
        <div className="w-2 h-2 rounded-full bg-[#F9F9F9] cursor-pointer" />
        <div className="w-2 h-2 rounded-full bg-[#F9F9F9] cursor-pointer" />
        <ChevronRight className="text-[#A19B91] cursor-pointer" />
      </div>
    </Container>
  );
}
