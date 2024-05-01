import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import {
  AddProductSchema,
  addProductSchema,
} from "@/services/product/types/dto";

export function useAddProductDialog() {
  const methods = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmit = useCallback((data: AddProductSchema) => {
    console.log({ data });
  }, []);

  return { methods, onSubmit };
}
