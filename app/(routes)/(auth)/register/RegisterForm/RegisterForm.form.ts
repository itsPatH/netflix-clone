import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(2, {
    message: "El email es obligatorio.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener entre 6 y 60 caracteres.",
  }),
  repeatPassword: z.string(),
}).refine((data) => data.password === data.repeatPassword, {    
    message: "Las contraseñas no coinciden.",
    path: ["repeatPassword"],
});