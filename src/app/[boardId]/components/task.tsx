import { task } from "@/app/contexts/board";

const Task = ({ name, description }: task) => {
    return ( 
            <div className="p-2 dark:bg-neutral-900 rounded-sm">
                <div className="flex flex-row justify-between">
                    <h1 className="text-sm">
                        {name}
                    </h1>
                </div>
                {
                    description !== undefined &&
                    <p className="text-md text-muted-foreground text-start">{description}</p>
                }
            </div>
    );
};
 
export default Task;