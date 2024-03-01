import AuthLayout from "../component/LayOut/AuthLayouts";
import FormLogin from "../component/Fragment/FormLogin";


const LoginPage = () => {
    return (
        <AuthLayout title = "Login" type="login">
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage;