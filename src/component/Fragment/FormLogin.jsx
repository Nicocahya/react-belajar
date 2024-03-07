import { useEffect, useRef, useState } from "react";
import Button from "../Element/Button";
import InputForm from "../Element/Input";
import { login } from "../../services/auth.service";


const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState (" ");
    const handleLogin = async (event) => {
        event.preventDefault();
        // localStorage.setItem('email',event.target.email.value);
        // localStorage.setItem('password',event.target.password.value);
        // window.location.href = "/products";
        const data= {
          username: event.target.username.value,
          password: event.target.password.value,
        };
        
        login(data, (status, res) => {
          if(status) {
            localStorage.setItem("token", res)
            window.location.href = "/products";
          } else {
            setLoginFailed(res.response.data)
            console.log(res.response.data);
          }
        });
    };

    const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  })

    return (
        <form onSubmit={handleLogin}>

        <InputForm 
        label="Username" 
        type="text" 
        placeholder="Jhon Doe" 
        name="username" ref={usernameRef} />

        <InputForm 
        label="password" 
        type="password" 
        placeholder="******" 
        name="password" />

        {loginFailed && <p className="text-red-700 text-center mb-2">{loginFailed}</p>} 

        <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
         </form>
    );
};

export default FormLogin;