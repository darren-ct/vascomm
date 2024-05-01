import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CustomerNavigation() {
  return (
    <div className="w-screen border-b">
      <Container className="flex flex-row justify-between items-center gap-12 px-10 py-5">
        <Image
          src="/brand-logo.png"
          width={168}
          height={27.09}
          alt="Brand Logo"
        />

        <div className="relative hidden sm:hidden md:block flex-1 max-w-2xl">
          <Input
            className="border-none bg-[#F9F9F9] text-[#A19B91]"
            placeholder="Cari parfum kesukaanmu"
          />
          <SearchIcon size={20} className="absolute right-3 top-2.5" />
        </div>

        <div className="flex flex-row items-center gap-4">
          <Link href="/auth/login">
            <Button variant="outline" className="rounded-none">
              MASUK
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="default" className="rounded-none">
              DAFTAR
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
