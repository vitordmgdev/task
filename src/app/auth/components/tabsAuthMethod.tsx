import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import TabAuthSignup from "./tabAuthSignup";
import TabAuthSignin from "./tabAuthSignin";

const TabsAuthMethod = () => {
    const authMethodParam = useSearchParams().get("method") ?? "signup";
    return (  
        <Tabs value={authMethodParam}>
            <TabsList className="w-full mb-4">
                <TabsTrigger value="signup" asChild>
                    <Link href="/auth?method=signup">
                        Criar conta
                    </Link>
                </TabsTrigger>
                <TabsTrigger value="signin" asChild>
                    <Link href="/auth?method=signin">
                        Logar em uma conta
                    </Link>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
                <TabAuthSignup />
            </TabsContent>
            <TabsContent value="signin">
                <TabAuthSignin />
            </TabsContent>
        </Tabs>
    );
};
 
export default TabsAuthMethod;
