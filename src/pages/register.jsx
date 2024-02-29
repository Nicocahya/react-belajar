import AuthLayout from "../component/LayOut/AuthLayouts";
import FormRegister from "../component/Fragment/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title = "Register">
            <FormRegister/>
            <p className="text-sm mt-7 text-center">
                Have an account? {" "}
                <Link to="/login" className="font-bold text-blue-600">Login</Link>
            </p>
        </AuthLayout>
    );
};

export default RegisterPage;