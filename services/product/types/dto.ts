import { z } from "zod";

export const addProductSchema = z.object({
  image: z.string(),
  name: z.string(),
  price: z.number(),
});

export const editProductSchema = addProductSchema;

export type AddProductSchema = z.infer<typeof addProductSchema>;
export type EditProductSchema = AddProductSchema;

export type AddProductDto = AddProductSchema;
export type EditProductDto = AddProductDto;
