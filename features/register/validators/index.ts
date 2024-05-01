import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
