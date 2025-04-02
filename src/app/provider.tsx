"use client";

import { BoardProvider } from "./contexts/board";

const Provider = ({children}:{children: React.ReactNode}) => {
    return (
        <BoardProvider>
            { children }
        </BoardProvider>
    );
};

export default Provider;