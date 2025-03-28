"use client";

import { createContext, useContext, useState } from "react";

type Task = {
    id: string,
    name: string,
    description?: string,
};

type Column = {
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
    createTask: (columnId: string, task: Task) => void
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
        setBoard((prev) => ({
            ...prev,
            columns: prev.columns.map((col) =>
                col.id === columnId ? {...col, tasks: [...col.tasks, task]} : col
            ),
        }));
    };

    return (
        <BoardContext.Provider value={{ board, createTask }}>
            {children}
        </BoardContext.Provider>
    );
};

export const useBoard = () => {
    const context = useContext(BoardContext);
    if (!context) throw new Error("useBoard deve ser usado dentro de um BoardProvider");
    return context;
};