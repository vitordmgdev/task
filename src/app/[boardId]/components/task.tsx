import { task } from "@/app/contexts/board";
import TaskDialog from "./taskDialog";

const Task = ({id, name, description, columnId }: task) => {
    return ( 
        <TaskDialog 
        id={id} 
        columnId={columnId}>
            <div className="flex flex-row justify-between">
                <h1 className="text-sm">
                    {name}
                </h1>
            </div>
            { 
                description !== undefined && 
                <p className="text-md text-muted-foreground text-start">{description}</p> 
            }
        </TaskDialog>
    );
};
 
export default Task;