"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().max(50, {
        message: "O máximo de caracteres é de 50."
    }),
    description: z.string().max(1000).optional()
});

interface TaskFormProps {
    handleCreateTask: (name: string, description: string | undefined) => void
}

const TaskForm = ({handleCreateTask}: TaskFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: ""
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        handleCreateTask(values.name, values.description);
    };

    return (  
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome da tarefa</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome da tarefa" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Descrição" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}>
                </FormField>
                <Button type="submit">
                    Criar tarefa
                </Button>
            </form>
        </Form>
    );
};
 
export default TaskForm;