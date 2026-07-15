import { z } from "zod";

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, "Course title must be at least 3 characters"),

  description: z.string().optional(),

  isPublished: z.coerce.boolean(),
});