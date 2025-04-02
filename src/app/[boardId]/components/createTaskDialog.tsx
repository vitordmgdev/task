import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import TaskForm from "./createTaskForm";

interface createTaskDialogProps {
    children: React.ReactNode,
    handleCreateTask: (name: string, description: string | undefined) => void
}

const CreateTaskDialog = ({children, handleCreateTask}:createTaskDialogProps) => {
    return ( 
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar tarefa</DialogTitle>
                </DialogHeader>
                <TaskForm handleCreateTask={handleCreateTask} />
            </DialogContent>
        </Dialog>
    );
};
 
export default CreateTaskDialog;