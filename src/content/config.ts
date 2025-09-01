import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(), // ISO "YYYY-MM-DD"
    draft: z.boolean().optional(),
    cover: z.string().optional() // e.g. "/assets/hero.png"
  })
});

export const collections = { blog };
