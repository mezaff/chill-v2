import { passwordSchema, usernameSchema } from "@/schemas/auth";
import { z } from "zod";

export const registerFormSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: z.string({ message: "Wajib diisi" }),
  })
  .superRefine((arg, ctx) => {
    if (arg.password !== arg.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Password tidak sesuai",
      });
    }
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
