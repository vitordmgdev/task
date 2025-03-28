"use client";

import { BoardProvider } from "../contexts/board";
/* interface UserDesktopProps {
    params: Promise<{ desktopId: string }>;
} */

import ColumnTask from "./components/columnTask";

const BoardId = (/* {params}: UserDesktopProps */) => {
    /* const { desktopId } = await params; */

    return ( 
        <BoardProvider>
            <div className="pl-2 pr-2 sm:pl-7 sm:pr-7 flex flex-col gap-4">
                <h1>Nome da área de trabalho</h1>
                <ColumnTask />
                
            </div>
        </BoardProvider>
     );
};
 
export default BoardId;