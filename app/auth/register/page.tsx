import { RegisterForm } from "@/features/register/components/form";

export default function Register(): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-[#3E3E3E] text-2xl">Selamat Datang</h1>
        <p className="text-muted-foreground text-xs">
          Silahkan masukkan nama, nomor telfon dan email Anda untuk mulai
          menggunakan aplikasi
        </p>
      </div>
      <RegisterForm />
    </>
  );
}
