import { z } from "zod";

export const classSchema = z.object({
  title: z
    .string()
    .min(3, "Class title must be at least 3 characters"),

  description: z.string().optional(),

  videoUrl: z.string().optional(),

  pdfUrl: z.string().optional(),

  order: z.coerce.number().min(1),

  isPublished: z.coerce.boolean(),
});