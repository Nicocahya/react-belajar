
import { forwardRef, useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Input =  forwardRef((props, ref) => {
    const {type, placeholder, name } = props;
    const { isDarkMode } = useContext(DarkMode);

return (
    <input 
    type={type}
    className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: oppacity-50"
    placeholder={placeholder} 
    name={name}
    id={name}
    ref={ref}
    />
);
});

export default Input;