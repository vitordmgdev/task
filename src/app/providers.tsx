"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { BoardProvider } from "./contexts/board";
import { Toaster } from "sonner";

const Providers = ({children}:{children: React.ReactNode}) => {
    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <BoardProvider>
                <Toaster theme="dark" />
                { children }
            </BoardProvider>
        </ThemeProvider>
    );
};

export default Providers;