export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-1 h-full hidden sm:hidden md:flex flex-col gap-4 justify-center items-center p-8 bg-primary">
        <h1 className="font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
          NAMA APLIKASI
        </h1>
        <div className="text-center text-sm max-w-[430px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </div>
      </div>
      <div className="flex-1 h-full flex justify-center items-center bg-white">
        <div className="w-full max-w-96 px-4">{children}</div>
      </div>
    </div>
  );
}
