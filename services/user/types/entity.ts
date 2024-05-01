import { z } from "zod";

export const userSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  status: z.enum(["active", "inactive"]),
});

export type UserSchema = z.infer<typeof userSchema>;
export type UserEntity = UserSchema & { id: string };
