"use client";

import { column, useBoard } from "@/app/contexts/board";
import { Button } from "@/components/ui/button";
import { Ellipsis, ListCheckIcon, Trash } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import CreateTaskDialog from "./createTaskDialog";
import Task from "./task";

const ColumnTask = ({id, name, tasks }: column) => {

    const { board, createTask, deleteColumn } = useBoard();

    const columnLength : number | undefined = board.columns.find(col => col.id === id)?.tasks.length;

    const handleCreateTask = (name:string, description:string | undefined) => {
        createTask(id, {
            name: name ? name : `Tarefa ${columnLength != undefined ? columnLength + 1 : ""}`,
            id: uuidv4(),
            description: description,
            columnId: id
        });
    };

    const handleDeleteColumn = () => {
        deleteColumn(id);
    };

    return ( 
        <div className="min-w-[200px] w-[360px] max-w-[440px] rounded-md flex flex-col gap-2">
            <div className="flex justify-between">
                <h1 className="text-xl font-medium">{name}</h1>
                <div className="flex gap-2 cursor-pointer">
                    <CreateTaskDialog handleCreateTask={handleCreateTask}>
                        <Button variant="ghost" size="icon">
                            <ListCheckIcon />
                        </Button>
                    </CreateTaskDialog>
                    <Button size="icon" className="rounded-sm cursor-pointer" 
                    variant="ghost">
                        <Ellipsis />
                    </Button>
                    <Button size="icon" className="rounded-sm cursor-pointer" 
                    variant="ghost" onClick={handleDeleteColumn}>
                        <Trash />
                    </Button>
                </div>
            </div>
            {
                tasks.map((task) => {
                    return (
                        <Task 
                        key={task.id} 
                        id={task.id} 
                        name={task.name} 
                        description={task.description} 
                        columnId={task.columnId} />
                    );
                })
            }
        </div>
    );
};
 
export default ColumnTask;