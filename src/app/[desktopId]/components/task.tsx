import { Task, useBoard } from "@/app/contexts/board";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";


const TaskOfColumn = ({id, name, description, columnId }: Task) => {
    const { deleteTask } = useBoard();

    console.log(columnId,id);

    const handleDeleteTask = () => {
        deleteTask(columnId, id);
    };

    return ( 
        <div className="p-4 border border-neutral-300 rounded-sm">
            <div className="flex flex-row justify-between">
                <h1>{name}</h1>
                <Button 
                size="icon" 
                className="rounded-sm cursor-pointer" 
                variant="ghost"
                onClick={handleDeleteTask}>
                    <Trash2 />
                </Button>
            </div>
            { description !== undefined && <p>{description}</p> }
        </div>
    );
};
 
export default TaskOfColumn;