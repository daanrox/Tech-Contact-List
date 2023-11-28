import { z } from 'zod';

export const addContactSchema = z.object({
    name: z.string().min(1, {message: 'Nome obrigatório'}),
    phone: z.string().min(1, {message: 'Número de telefone obrigatório'}),
    email: z.string().email('Digite um email válido'),
})