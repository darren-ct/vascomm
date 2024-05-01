import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import {
  EditUserDto,
  EditUserSchema,
  editUserSchema,
} from "@/services/user/types/dto";

interface UseEditUserDialogProps {
  defaultValues: EditUserDto;
}

export function useEditUserDialog({ defaultValues }: UseEditUserDialogProps) {
  const methods = useForm<EditUserSchema>({
    resolver: zodResolver(editUserSchema),
    defaultValues,
  });

  const onSubmit = useCallback((data: EditUserSchema) => {
    console.log({ data });
  }, []);

  return { methods, onSubmit };
}
