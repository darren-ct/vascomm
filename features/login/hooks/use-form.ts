import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

export function useLoginForm() {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback((data: LoginSchema) => {
    console.log({ data });
  }, []);

  return { methods, onSubmit };
}
