import { Avatar } from "@/components/shared/avatar";
import Image from "next/image";

export function TopMenu(): JSX.Element {
  return (
    <div className="w-full flex flex-row justify-between items-center px-[35px] py-[15px] bg-white">
      <Image
        src="/brand-logo.png"
        width={168}
        height={27.09}
        alt="Brand Logo"
      />

      <div className="flex flex-row items-center gap-4">
        <div>
          <p className="text-primary text-[10px] text-end">Hallo Admin,</p>
          <p className="text-sm">Darren Christian</p>
        </div>
        <Avatar />
      </div>
    </div>
  );
}
