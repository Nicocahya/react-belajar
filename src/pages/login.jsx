import AuthLayout from "../component/LayOut/AuthLayouts";
import FormLogin from "../component/Fragment/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayout title = "Login">
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage;