import Button from "../Element/Button";
import InputForm from "../Element/Input";


const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email',event.target.email.value);
        localStorage.setItem('password',event.target.password.value);
        window.location.href = "/products";
    }
    return (
        <form onSubmit={handleLogin}>
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

        <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
         </form>
    );
};

export default FormLogin;