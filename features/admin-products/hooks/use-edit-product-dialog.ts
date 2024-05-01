import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import {
  EditProductDto,
  EditProductSchema,
  editProductSchema,
} from "@/services/product/types/dto";

interface UseEditProductDialogProps {
  defaultValues: EditProductDto;
}

export function useEditProductDialog({
  defaultValues,
}: UseEditProductDialogProps) {
  const methods = useForm<EditProductSchema>({
    resolver: zodResolver(editProductSchema),
    defaultValues,
  });

  const onSubmit = useCallback((data: EditProductSchema) => {
    console.log({ data });
  }, []);

  return { methods, onSubmit };
}
