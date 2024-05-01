import Image from "next/image";

export function AuthDisplay(): JSX.Element {
  return (
    <div className="relative flex-1 h-full hidden sm:hidden md:flex flex-col gap-4 justify-center items-center p-8 bg-primary">
      <h1 className="font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl z-10">
        NAMA APLIKASI
      </h1>
      <div className="text-center text-sm max-w-[430px] z-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <Image
        alt="left ellipse"
        className="absolute top-[-160px] left-[-10px]"
        src="/auth/ellipse-left.png"
        width={310}
        height={310}
      />
      <Image
        alt="bottom ellipse"
        className="absolute bottom-[-90px] right-0"
        src="/auth/ellipse-bottom.png"
        width={800}
        height={800}
      />
    </div>
  );
}
