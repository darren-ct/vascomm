import { z } from "zod";

export const productSchema = z.object({
  createdAt: z.string().optional(),
  imageUrl: z.string(),
  name: z.string(),
  price: z.number(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export type ProductSchema = z.infer<typeof productSchema>;
export type ProductEntity = ProductSchema & { id: string };
