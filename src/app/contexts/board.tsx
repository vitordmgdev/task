"use client";

import { createContext, useState } from "react";

type Task = {
    id: string,
    name: string,
    description?: string,
    createdAt: Date,
    updatedAt: Date
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
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

//Estado inicial do quadro
const initialBoard = {
    id: 1,
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

    return (
        <BoardContext.Provider value={{ board, setBoard, }}>
            {children}
        </BoardContext.Provider>
    );
};