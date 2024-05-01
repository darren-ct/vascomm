"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLoginForm } from "../hooks/use-form";
import { Input } from "@/components/ui/input";

export function LoginForm(): JSX.Element {
  const { methods, onSubmit } = useLoginForm();

  return (
    <Form {...methods}>
      <form
        className="w-full flex flex-col gap-8"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email / Nomor Telepon</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: user@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Masukkan password"
                    {...field}
                  />
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
