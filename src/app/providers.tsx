"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { BoardProvider } from "./contexts/board";

const Providers = ({children}:{children: React.ReactNode}) => {
    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <BoardProvider>
                { children }
            </BoardProvider>
        </ThemeProvider>
    );
};

export default Providers;