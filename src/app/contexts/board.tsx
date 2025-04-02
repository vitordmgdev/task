"use client";

import { CircleCheck, CircleX } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import { v4 as uuid } from "uuid";

export type task = {
    id: string,
    name: string,
    description?: string | undefined,
    columnId: string
};

export type column = {
    id: string,
    name: string,
    tasks: task[]
};

type board = {
    id: string,
    name: string,
    columns: column[]
};

//Tipagem do BoardContext
type boardContextType = {
    board: board,
    createTask: (columnId: string, task: task) => void,
    deleteTask: (columnId: string, taskId: string) => void,
    createColumn: () => void,
    deleteColumn: (columnId: string) => void,
};

const BoardContext = createContext<boardContextType | undefined>(undefined);

//Estado inicial do quadro
const initialBoard = {
    id: "1",
    name: "Meu quadro de tarefas",
    description: "Tarefas do dia-a-dia",
    columns: [
        { 
            id: uuid(), 
            name: "A Fazer", 
            tasks: [] 
        }
    ],
};

export const BoardProvider = ({children}:{children:React.ReactNode}) => {
    const [ board, setBoard ] = useState<board>(initialBoard);

    const styledToast = {
        gap: "16px"
    };

    const createColumn = () => {
        const boardLength : number = board.columns.length;

        setBoard((prev) => ({
            ...prev,
            columns: [...prev.columns, {id: uuid(), name: `Lista ${boardLength + 1}`, tasks: []}]
        }));

        toast("Nova coluna criada com sucesso!", {
            description: `A lista ${boardLength + 1} foi criada com sucesso!`,
            icon: <CircleCheck className="text-green-400" />,
            style: styledToast
        });
    };

    const deleteColumn = (columnId: string) => {
        const columnName = board.columns.find(col => col.id === columnId)?.name;

        setBoard((prev) => ({
            ...prev,
            columns: prev.columns.filter(col => col.id !== columnId)
        }));
        toast("Lista excluida!", {
            description: `A lista ${columnName} foi excluida!`,
            icon: <CircleX className="text-red-400" />,
            style: styledToast
        });
    };

    const createTask = (columnId: string, task: task ) => {
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
            style: styledToast
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
            description: `A tarefa "${taskName}" foi removida.`,
            icon: <CircleX className="text-red-400" />,
            style: styledToast
        });
    };

    return (
        <BoardContext.Provider value={{ board, createTask, deleteTask, createColumn, deleteColumn }}>
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