"use client";
import TabsAuthMethod from "./components/tabsAuthMethod";

const AuthPage = () => {
    return ( 
        <div className="p-3 sm:p-7 h-[calc(100dvh-140px)] w-full flex gap-6 justify-center items-center">
            <TabsAuthMethod />
        </div>
    );
};
 
export default AuthPage;