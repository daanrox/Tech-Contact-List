import { z } from 'zod';
  

export const loginSchema = z.object({
    email: z
        .string()
        .email('Digite um email válido'),
    password: z
        .string()
        .min(8, 'Sua senha precisa ter no mínimo 8 caracteres') 
});

export type iLoginForm = z.infer<typeof loginSchema>