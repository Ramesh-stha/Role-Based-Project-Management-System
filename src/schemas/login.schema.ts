import { z } from "zod";

export const loginstateSchema = z.object({
  userName: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type loginstate = z.infer<typeof loginstateSchema>;