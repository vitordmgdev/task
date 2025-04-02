import { useBoard } from "@/app/contexts/board";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TaskDialogProps {
    children: React.ReactNode,
    id: string,
    columnId: string
}

const TaskDialog = ({ children, id, columnId }:TaskDialogProps) => {
    const { deleteTask } = useBoard();

    const handleDeleteTask = () => {
        deleteTask(columnId, id);
    };

    return ( 
        <Dialog>
            <DialogTrigger 
            className="cursor-pointer flex flex-col gap-1 p-2 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 rounded-sm">
                { children }
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar tarefa</DialogTitle>
                </DialogHeader>
                <Button 
                onClick={handleDeleteTask}
                variant="destructive"
                className="cursor-pointer">
                    <Trash /> 
                    Deletar tarefa
                </Button>
            </DialogContent>
        </Dialog>
    );
};
 
export default TaskDialog;