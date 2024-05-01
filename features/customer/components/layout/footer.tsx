import { FacebookBold } from "@/components/icons/facebook-bold";
import { InstagramBold } from "@/components/icons/instagram-bold";
import { TwitterBold } from "@/components/icons/twitter-bold";
import { Container } from "@/components/shared/container";
import Image from "next/image";

export function CustomerFooter() {
  return (
    <div className="w-screen border-t">
      <Container className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-[100px] py-[90px] gap-x-36 gap-y-12">
        <div className="flex flex-col items-center gap-11">
          <Image
            src="/brand-logo.png"
            width={168}
            height={27.09}
            alt="Brand Logo"
          />
          <p className="text-center text-xs text-muted-foreground max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            in vestibulum, sed dapibus tristique nullam.
          </p>
          <div className="flex flex-row items-center gap-5">
            <FacebookBold />
            <TwitterBold />
            <InstagramBold />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-center md:justify-center lg:justify-start gap-16">
          <div className="flex flex-col gap-8 items-center sm:items-start">
            <p className="text-lg text-center sm:text-left">Layanan</p>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-center sm:text-left cursor-pointer">
                BANTUAN
              </p>
              <p className="text-xs text-center sm:text-left cursor-pointer">
                TANGGUNG JAWAB
              </p>
              <p className="text-xs text-center sm:text-left cursor-pointer">
                HUBUNGI KAMI
              </p>
              <p className="text-xs text-center sm:text-left cursor-pointer">
                CARA BERJUALAN
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center sm:items-start">
            <p className="text-lg text-center sm:text-left">Tentang Kami</p>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-center sm:text-left cursor-pointer">
                ABOUT US
              </p>
              <p className="text-xs text-center sm:text-left cursor-pointer">
                KARIR
              </p>
              <p className="text-xs text-center sm:text-left cursor-pointer">
                BLOG
              </p>
              <p className="text-xs text-center sm:text-left cursor-pointer">
                KEBIJAKAN PRIVASI
              </p>
              <p className="text-xs text-center sm:text-left cursor-pointer">
                SYARAT DAN KETENTUAN
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center sm:items-start">
            <p className="text-lg text-center sm:text-left">Mitra</p>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-center sm:text-left cursor-pointer">
                SUPPLIER
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full h-6 bg-[#E4FDFF]" />
    </div>
  );
}
