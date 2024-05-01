import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserEntity } from "@/services/user/types/entity";
import { useFormContext } from "react-hook-form";

export function AdminUserFields(): JSX.Element {
  const methods = useFormContext<Partial<UserEntity>>();

  return (
    <div className="flex flex-col gap-4">
      <FormField
        control={methods.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nama</FormLabel>
            <FormControl>
              <Input placeholder="Masukkan Nama" {...field} />
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
            <FormLabel>Nomor Telepon</FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="Masukkan Nomor Telepon"
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
              <Input placeholder="Masukkan Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
