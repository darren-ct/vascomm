import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { AddUserSchema, addUserSchema } from "@/services/user/types/dto";

export function useAddUserDialog() {
  const methods = useForm<AddUserSchema>({
    resolver: zodResolver(addUserSchema),
  });

  const onSubmit = useCallback((data: AddUserSchema) => {
    console.log({ data });
  }, []);

  return { methods, onSubmit };
}
