"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRegisterForm } from "../hooks/use-form";
import { Input } from "@/components/ui/input";

export function RegisterForm(): JSX.Element {
  const { methods, onSubmit } = useRegisterForm();

  return (
    <Form {...methods}>
      <form
        className="w-full flex flex-col gap-8"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-[#3E3E3E] text-2xl">Selamat Datang</h1>
          <p className="text-muted-foreground text-xs">
            Silahkan masukkan nama, nomor telfon dan email Anda untuk mulai
            menggunakan aplikasi
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No. Telepon</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Masukkan nomor telepon"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Masukkan email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" size="lg" className="rounded-none">
          MASUK
        </Button>
      </form>
    </Form>
  );
}
