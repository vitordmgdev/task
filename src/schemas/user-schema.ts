import { z } from "zod";

export const formSchemaUser = z.object({
    username: z.string().min(3, {
        message: "O campo de usuário deve conter no mínimo 3 caracteres.",
    }).max(16, {
        message: "O campo de usuário deve conter no máximo 16 caracteres."
    }),
    firstname: z.string().min(3, {
        message: "O campo deve conter no mínimo 3 caracteres."
    }).max(16, {
        message: "O campo deve conter no máximo 16 caracteres."
    }),
    lastname: z.string().max(32, {
        message: "O campo deve ter no máximo 32 caracteres."
    }),
    email: z.string().email({
        message: "Este email é invalido! Verifique e preencha da forma correta."
    }),
    password: z.string().min(6, {
        message: "Sua senha deve conter no mínimo 6 caracteres."
    }).max(20, {
        message: "Sua senha deve conter no máximo 20 caracteres."
    })
});

export type FormSchemaUser = z.infer<typeof formSchemaUser>;