import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["ADMIN", "USER"]),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
