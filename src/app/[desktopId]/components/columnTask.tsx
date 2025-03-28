import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

const ColumnTask = () => {
    return ( 
        <div className="max-w-[440px] rounded-md flex flex-col gap-2">
            <div className="flex justify-between">
                <h1 className="text-xl font-medium">Tarefas de casa</h1>
                <Button size="icon"  className="rounded-sm cursor-pointer" variant="ghost">
                    <Ellipsis />
                </Button>
            </div>
            <Button className="w-full rounded-sm">
                Adicionar tarefa
            </Button>
        </div>
    );
};
 
export default ColumnTask;