import { LoginForm } from "@/features/login/components/form";

export default function LoginAdmin(): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-[#3E3E3E] text-2xl">Selamat Datang, Admin!</h1>
        <p className="text-muted-foreground text-xs">
          Silahkan masukkan nomor telfon / email dan password Anda untuk mulai
          menggunakan aplikasi
        </p>
      </div>
      <LoginForm />
    </>
  );
}
