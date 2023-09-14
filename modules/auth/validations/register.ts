import * as z from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z
      .string()
      .min(1, {
        message: "Email is required.",
      })
      .email({
        message: "Email must be valid.",
      }),
    password: z
      .string()
      .min(1, {
        message: "Password is required.",
      })
      .min(6, {
        message: "Password must be at least 6 characters.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
