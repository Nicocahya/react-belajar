import AuthLayout from "../component/LayOut/AuthLayouts";
import FormRegister from "../component/Fragment/FormRegister";


const RegisterPage = () => {
    return (
        <AuthLayout title = "Register" type="register">
            <FormRegister/>
        </AuthLayout>
    );
};

export default RegisterPage;