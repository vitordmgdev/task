import { useBoard } from "@/app/contexts/board";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";

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
            <DialogTrigger className="cursor-pointer">
                { children }
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar tarefa</DialogTitle>
                </DialogHeader>
                <Button 
                onClick={handleDeleteTask} 
                variant="ghost"
                className="cursor-pointer">
                    <Trash /> Deletar tarefa
                </Button>
            </DialogContent>
        </Dialog>
    );
};
 
export default TaskDialog;