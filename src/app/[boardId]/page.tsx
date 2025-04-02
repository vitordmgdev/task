"use client";

import ColumnTask from "./components/columnTask";
import { useBoard } from "../contexts/board";
import { Button } from "@/components/ui/button";

const BoardView = () => {
    const { board, createColumn } = useBoard();
    const handleCreateColumn = () => {
        createColumn();
    };

    return ( 
            <div className="pl-2 pr-2 sm:pl-7 sm:pr-7 flex flex-col gap-4">
                <h1>{board.name}</h1>
                <div className="flex gap-4 flex-col md:flex-row">
                    {board.columns.map(({id, name, tasks}) => {
                        return (
                            <ColumnTask 
                            key={id} 
                            id={id} 
                            name={name} 
                            tasks={tasks} 
                            />
                        );
                    })}
                    <Button 
                    variant="outline" 
                    className="min-w-[200px] w-[360px] max-w-[440px] rounded-md" 
                    onClick={handleCreateColumn}>
                        Criar lista de tarefa
                    </Button>
                </div>
                
            </div>
     );
};
 
export default BoardView;