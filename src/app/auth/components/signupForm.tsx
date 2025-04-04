"use client";

import { Button } from "@/components/ui/button";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { formSchemaUser } from "@/schemas/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignupForm = () => {
    const form = useForm<z.infer<typeof formSchemaUser>>({
        resolver: zodResolver(formSchemaUser),
        defaultValues: {
            username: ""
        }
    });

    const handleSubmit = (values: z.infer<typeof formSchemaUser>) => {
        console.log(values);
    };

    return ( 
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nome de usuário</FormLabel>
                        <FormControl>
                            <Input placeholder="@username" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <div className="flex gap-4">
                    <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o seu nome" {...field} />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Sobrenome</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o seu sobrenome" {...field} />
                            </FormControl>
                        </FormItem>
                    )}/>
                </div>
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite o seu email" {...field} />
                        </FormControl>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="Digite a sua senha" 
                            {...field} 
                            type="password" 
                            />
                        </FormControl>
                    </FormItem>
                )}/>
                <Button>
                    Criar conta
                </Button>
                
            </form>
        </Form>
    );
};
 
export default SignupForm;