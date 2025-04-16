import { z } from "zod";

export const passwordSchema = z
  .string({ message: "Wajib diisi" })
  .min(8, { message: "Password harus 8 karakter atau lebih" })
  .regex(/[A-Z]/, { message: "Password harus mengandung huruf kapital" })
  .regex(/[0-9]/, { message: "Password harus mengandung angka" });

export const usernameSchema = z
  .string({ message: "Wajib diisi" })
  .min(4, { message: "Username harus 4 karakter atau lebih" });
