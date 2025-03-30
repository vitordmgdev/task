"use client";

import ColumnTask from "./components/columnTask";
import { useBoard } from "../contexts/board";

const BoardView = () => {
    const { board, createTask } = useBoard();

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
                            createTask={createTask}
                            />
                        );
                    })}
                </div>
                
            </div>
     );
};
 
export default BoardView;