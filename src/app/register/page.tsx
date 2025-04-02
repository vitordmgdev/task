import RegisterForm from "./components/registerForm";

const RegisterPage = () => {
    return (  
        <div className="h-[calc(100dvh-140px)] w-full flex justify-center items-center">
            <div className="w-full max-w-[480px] ml-2 mr-2">
                <RegisterForm />
            </div>
        </div>
    );
};
 
export default RegisterPage;