import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Element/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();

  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    // <div className="fixed w-full">
    <div className="flex justify-end h-20 bg-teal-500 text-white items-center px-10">
        {username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Log Out</Button>
        <div className="flex items-center h-10 bg-black p-2 rounded-md ml-5">
                    Item : {totalCart} | price : ${total}
                </div>
        <Button className="bg-black px-10 mx-5 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
        >{isDarkMode ? "Light" : "Dark"}</Button>
    </div>
// </div>
);
};

export default Navbar;