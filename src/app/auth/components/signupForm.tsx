"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "./schemas/registerUserSchema";
import { toast } from "sonner";
import { styledToast } from "@/app/contexts/board";
import { CircleCheck, CircleX } from "lucide-react";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
  });

 

  const handleSubmit = async(values: z.infer<typeof registerSchema>) => {
    try {
      const response = await fetch("http://localhost:3333/auth/register", {
        method: "POST",
        headers: {
          "Content-type":"application/json"
        },
        body: JSON.stringify(values)
      });

      const data = await response.json();

      if(response.ok) {
        router.push("/auth?method=signin");
        toast(data.message, {
          icon: <CircleCheck className="text-green-400" />,
          style: styledToast
        });
      }
      if(!response.ok) {
        toast("Erro ao cadastrar usuário", {
          description: data.message,
            icon: <CircleX className="text-red-400" />,
            style: styledToast
        });
      }

    } catch(err) {
      console.error("Erro na requisição:", err);
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4"
      onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome de usuário *</FormLabel>
              <FormControl>
                <Input placeholder="Digite o seu nome de usuário" 
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Exemplo: vitor.dmg
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField control={form.control} name="firstname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome *</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o seu nome" 
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField control={form.control} name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Sobrenome (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o seu sobrenome" 
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField control={form.control} name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input placeholder="Digite o seu email" 
                  {...field} 
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField control={form.control} name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha *</FormLabel>
              <FormControl>
                <Input placeholder="Digite a sua senha"
                  {...field} type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">
          Criar conta
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
