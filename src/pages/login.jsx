import AuthLayout from "../component/LayOut/AuthLayouts";
import FormLogin from "../component/Fragment/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayout title = "Login">
            <FormLogin/>
            <p className="text-sm mt-7 text-center">
                Don't have an account? {" "} 
                <Link to="/register" className="font-bold text-blue-600">Register</Link>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;