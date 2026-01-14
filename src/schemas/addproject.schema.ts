import { z } from "zod";

export const createProjectSchema = z.object({
  projectName: z.string().min(1),
  description: z.string().min(5),
  assignedDate: z.string(),
  endDate: z.string(),
  manager: z.string().optional(),
   member: z.string().optional(),
  image: z.any().optional(),
  pdf: z.any().optional(),
  status: z.enum(["PENDING", "ACCEPTED", "COMPLETED"]).optional(),
});

export type createProjectValues = z.infer<typeof createProjectSchema>;
