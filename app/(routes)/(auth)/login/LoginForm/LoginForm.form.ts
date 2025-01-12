import { z } from "zod";

export const formSchema = z.object({
    email: z.string().min(2, {
      message: "Ingresa un email o un número de teléfono válido.",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener entre 4 y 60 caracteres.",
    }),
  });