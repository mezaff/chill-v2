import { string, z } from "zod";

export const loginFormSchema = z.object({
  username: string({ message: "Wajib diisi" }),
  password: string({ message: "Wajib diisi" }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
