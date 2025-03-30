"use client";

import { CircleCheck } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Toaster, toast } from "sonner";

export type Task = {
    id: string,
    name: string,
    description?: string | undefined,
    columnId: string
};

export type Column = {
    id: string,
    name: string,
    tasks: Task[]
};

type Board = {
    id: string,
    name: string,
    columns: Column[]
};

//Tipagem do BoardContext
type BoardContextType = {
    board: Board,
    createTask: (columnId: string, task: Task) => void,
    deleteTask: (columnId: string, taskId: string) => void
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

//Estado inicial do quadro
const initialBoard = {
    id: "1",
    name: "Meu quadro de tarefas",
    description: "Tarefas do dia-a-dia",
    columns: [
        { id: "col1", name: "A Fazer", tasks: [] },
        { id: "col2", name: "Em Andamento", tasks: [] },
        { id: "col3", name: "Concluído", tasks: [] }
    ],
};

export const BoardProvider = ({children}:{children:React.ReactNode}) => {
    const [ board, setBoard ] = useState<Board>(initialBoard);

    const createTask = (columnId: string, task: Task ) => {
        const columnName = board.columns.find(col => col.id === columnId)?.name;

        setBoard((prev) => ({
            ...prev,
            columns: prev.columns.map((col) =>
                col.id === columnId ? {...col, tasks: [...col.tasks, task]} : col
            ),
        }));
        toast("Tarefa criada!", {
            description: `Tarefa adicionada na lista "${columnName}".`,
            icon: <CircleCheck className="text-green-400" />,
            style: {
                gap: "16px"
            }
        });
    };

    const deleteTask = (columnId: string, taskId: string ) => {
        const taskName = board.columns.find(col => col.id === columnId)?.tasks.find(task => task.id === taskId)?.name;

        setBoard((prev) => ({
            ...prev,
            columns: prev.columns.map((col) => 
            col.id === columnId ? {...col, tasks: [...col.tasks.filter(task => task.id !== taskId)]} : col
        )
        }));
        toast("Tarefa deletada!", {
            description: `A tarefa "${taskName}" foi removida.`
        });
    };

    return (
        <BoardContext.Provider value={{ board, createTask, deleteTask }}>
            <Toaster theme="dark" />
            {children}
        </BoardContext.Provider>
    );
};

export const useBoard = () => {
    const context = useContext(BoardContext);
    if (!context) throw new Error("useBoard deve ser usado dentro de um BoardProvider");
    return context;
};