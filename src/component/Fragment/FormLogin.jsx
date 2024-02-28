import Button from "../Element/Button";
import InputForm from "../Element/Input";


const FormLogin = () => {
    return (
        <form action="">
        <InputForm 
        label="email" 
        type="email" 
        placeholder="example@gmail.com" 
        name="email" />

        <InputForm 
        label="password" 
        type="password" 
        placeholder="******" 
        name="password" />

        <Button classname="bg-blue-600 w-full">Login</Button>
         </form>
    );
};

export default FormLogin;