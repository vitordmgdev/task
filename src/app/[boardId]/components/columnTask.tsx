import { Column, Task, useBoard } from "@/app/contexts/board";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import TaskOfColumn from "./task";

interface ColumnTaskProps extends Column {
    createTask: (columnId: string, task: Task) => void;
};

const ColumnTask = ({id, name, tasks, createTask }: ColumnTaskProps) => {
    const { board } = useBoard();

    const columnLength : number | undefined = board.columns.find(col => col.id === id)?.tasks.length;
    const handleCreateTask = () => {
        createTask(id, {
            name: `Tarefa ${columnLength != undefined ? columnLength + 1 : ""}`,
            id: uuidv4(),
            description: "",
            columnId: id
        });
    };

    return ( 
        <div className="min-w-[300px] w-[440px] max-w-[440px] rounded-md flex flex-col gap-2">
            <div className="flex justify-between">
                <h1 className="text-xl font-medium">{name}</h1>
                
                <Button size="icon"  className="rounded-sm cursor-pointer" variant="ghost">
                    <Ellipsis />
                </Button>
            </div>
            {
                tasks.map((task) => {
                    return (
                        <TaskOfColumn key={task.id} id={task.id} name={task.name} description={task.description} columnId={task.columnId} />
                    );
                })
            }
            <Button className="w-full rounded-sm" 
            onClick={handleCreateTask}
            variant="outline">
                Adicionar tarefa
            </Button>
        </div>
    );
};
 
export default ColumnTask;