import { z } from "zod";

export const addUserSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
});

export const editUserSchema = addUserSchema;

export type AddUserSchema = z.infer<typeof addUserSchema>;
export type EditUserSchema = AddUserSchema;

export type AddUserDto = AddUserSchema;
export type EditUserDto = AddUserDto;
