import SignupForm from "./signupForm";

const TabAuthSignup = () => {
    return (  
        <div className="flex flex-col gap-4 max-w-[480px]">
            <h1 className="text-3xl font-semibold">
                Crie sua conta
            </h1>
            <SignupForm />   
        </div>
    );
};
 
export default TabAuthSignup;