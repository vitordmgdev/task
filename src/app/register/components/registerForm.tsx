"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerUserSchema = z.object({
    username: z.string().min(3, {
        message: "Seu nome de usuário deve conter no mínimo 3 caracteres.",
    }).max(16, {
        message: "Seu nome de usuário deve conter no máximo 16 caracteres."
    }),
    name: z.string().min(3, {
        message: "Seu nome deve conter no mínimo 3 caracteres."
    }).max(32, {
        message: "Seu nome deve conter no máximo 32 caracteres."
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

type RegisterUserSchema = z.infer<typeof registerUserSchema>

const RegisterForm = () => {
    const form = useForm<RegisterUserSchema>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    function handleRegisterUser(data: RegisterUserSchema) {
        console.log(data);
    };

    return (  
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(handleRegisterUser)}
            className="flex flex-col gap-4 p-4 bg-neutral-950 rounded-md border border-neutral-800"
            >
                <h1 className="text-xl font-semibold">
                    Criar conta
                </h1>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome de usuário</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o seu nome de usuário" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} 
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} 
                />      

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seu nome completo</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} 
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sua senha</FormLabel>
                            <FormControl>
                                <Input placeholder="Sua senha" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} 
                />

                <Button type="submit">
                    Cadastrar-se
                </Button>
            </form>
        </Form>
    );
};
 
export default RegisterForm;