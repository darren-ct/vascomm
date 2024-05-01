import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductEntity } from "@/services/product/types/entity";
import { useFormContext } from "react-hook-form";

export function AdminProductFields(): JSX.Element {
  const methods = useFormContext<Partial<ProductEntity>>();

  return (
    <div className="flex flex-col gap-4">
      <FormField
        control={methods.control}
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gambar</FormLabel>
            <FormControl>
              <Input placeholder="Masukkan Gambar" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={methods.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nama Produk</FormLabel>
            <FormControl>
              <Input placeholder="Masukkan Nama Produk" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={methods.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Harga</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Masukkan Harga" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
