import { z } from "zod";

export const userSchema = z.object({
  createdAt: z.string().optional(),
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  role: z.enum(["ADMIN", "USER"]),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export type UserSchema = z.infer<typeof userSchema>;
export type UserEntity = UserSchema & { id: string };
