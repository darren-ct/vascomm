import { z } from "zod";

export const productSchema = z.object({
  image: z.string(),
  name: z.string(),
  createdAt: z.string(),
  price: z.number(),
});

export type ProductSchema = z.infer<typeof productSchema>;
export type ProductEntity = ProductSchema & { id: string };
