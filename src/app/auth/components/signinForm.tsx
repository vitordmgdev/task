"use client";
import { Button } from "@/components/ui/button";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { formSchemaUser } from "@/schemas/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SigninForm = () => {
    const form = useForm<z.infer<typeof formSchemaUser>>({
        resolver: zodResolver(formSchemaUser),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    return (  
        <Form {...form}>
            <form className="flex flex-col gap-4">
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
                            <Input placeholder="Digite a sua senha" {...field} />
                        </FormControl>
                    </FormItem>
                )}/>
                <Button>
                    Entrar na sua conta
                </Button>
            </form>
        </Form>
    );
};
 
export default SigninForm;