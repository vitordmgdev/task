import SignupForm from "./signupForm";

const TabAuthSignup = () => {
    return (  
        <div className="flex flex-col gap-4 w-full sm:w-[480px] max-w-[480px]">
            <h1 className="text-xl sm:text-3xl font-semibold">
                Crie sua conta
            </h1>
            <SignupForm />   
        </div>
    );
};
 
export default TabAuthSignup;