import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import TabAuthSignup from "./tabAuthSignup";

const TabsAuthMethod = () => {
    const authMethodParam = useSearchParams().get("method") ?? "signup";
    return (  
        <Tabs value={authMethodParam}>
            <TabsList>
                <TabsTrigger value="signup" asChild>
                    <Link href="/auth?method=signup">
                        Cadastrar
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="signin" asChild>
                    <Link href="/auth?method=signin">
                        Logar
                    </Link>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
                <TabAuthSignup />
            </TabsContent>
            <TabsContent value="signin">
                <h1 className="text-3xl font-semibold">Entre na sua conta</h1>
            </TabsContent>
        </Tabs>
    );
};
 
export default TabsAuthMethod;
