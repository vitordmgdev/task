import { task } from "@/app/contexts/board";
import TaskDialog from "./taskDialog";

const Task = ({id, name, description, columnId }: task) => {
    return ( 
        <TaskDialog id={id} columnId={columnId}>
            <div className="flex flex-col gap-1 p-2 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 rounded-sm">
                <div className="flex flex-row justify-between">
                    <h1 className="text-sm">
                        {name}
                    </h1>
                </div>
                { description !== undefined && <p className="text-md text-muted-foreground">{description}</p> }
            </div>
        </TaskDialog>
    );
};
 
export default Task;