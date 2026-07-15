import { z } from "zod";

export const enrollmentSchema = z.object({
  courseIds: z.array(z.string()),
});