import { useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "../validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

export function useRegisterForm() {
  const methods = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = useCallback((data: RegisterSchema) => {
    console.log({ data });
  }, []);

  return { methods, onSubmit };
}
