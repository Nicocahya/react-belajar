import Button from "../Element/Button";
import InputForm from "../Element/Input";


const FormRegister = () => {
    return (
        <form action="">
        <InputForm 
        label="Fullname" 
        type="text" 
        placeholder="insert your name here..." 
        name="fullname" />

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

        <InputForm 
        label="Confirm Password" 
        type="password" 
        placeholder="******" 
        name="Confirm Password" />

        <Button classname="bg-blue-600 w-full">Register</Button>
         </form>
    );
};

export default FormRegister;