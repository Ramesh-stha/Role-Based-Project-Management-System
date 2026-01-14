import { z } from "zod";

export const organizationManagement = z.object({
  organizationname: z.string().min(1,"Organization name is required"),
  organizationemail: z.email().min(1,"Valid email required"),
});

export type organizationSchema = z.infer<typeof organizationManagement>;
