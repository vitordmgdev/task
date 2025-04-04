import SigninForm from "./signinForm";

const TabAuthSignin = () => {
    return (  
        <div className="flex flex-col gap-4 w-[480px] max-w-[480px]">
            <h1 className="text-3xl font-semibold">
                Entre na sua conta
            </h1>
            <SigninForm />
        </div>
    );
};
 
export default TabAuthSignin;