import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { 
    Copy, 
    Trash2 
} from "lucide-react";

interface ColumnPopoverProps {
    children: React.ReactNode,
    handleDeleteColumn: () => void
}

const ColumnPopover = ({
    children, 
    handleDeleteColumn
}: ColumnPopoverProps) => {
    return ( 
        <Popover>
            <PopoverTrigger asChild>
                { children }
            </PopoverTrigger>
            <PopoverContent className="p-1">
                <Button 
                className="w-full justify-start" variant="ghost" onClick={handleDeleteColumn}>
                    <Trash2 /> Excluir lista
                </Button>
                <Button 
                className="w-full justify-start" variant="ghost">
                    <Copy /> Copiar lista
                </Button>
            </PopoverContent>
        </Popover>
    );
};
 
export default ColumnPopover;