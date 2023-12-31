import { z } from 'zod';
  

export const registerSchema = z.object({
    name: z
        .string()
        .nonempty('O nome é obrigatório.'),
    email: z
        .string()
        .nonempty('O e-mail é obrigatório')
        .email('O e-mail fornecido é inválido.'),
    password: z
        .string()
        .nonempty('A senha é obrigatória.')
        .min(8, { message: 'A senha é obrigatória e precisa de mínimo 8 caracteres'})
        .regex(/(?=.*[a-zA-Z])/, 'É necessário ao menos uma letra')
        .regex(/(?=.*\W|_)/, 'É necessário ter ao menos um caractere especial.')
        .regex(/(?=.*?[0-9])/, 'É necessário ao menos um número'),
    phone: z
        .string()
        .nonempty('O número de telefone é obrigatório'),
    
});

export type iRegisterForm = z.infer<typeof registerSchema>