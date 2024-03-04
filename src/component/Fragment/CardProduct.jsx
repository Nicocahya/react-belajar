import { Children } from "react";
import Button from "../Element/Button";


const CartProduct = (props) => {
    const {children} = props;
    return (
            <div className="w-full max-w-ws bg-gray-700 border border-gray-600 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
                {children}
            </div>
    );       
};

const Header = (props) => {
    const {image} = props;
    return (
        <a href="#">
            <img 
            src={image} 
            alt="product" 
            className="p-8 rounded-t-lg" />
        </a>
    );
};

const Body = (props) => {
    const {children, name} = props ;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name}
                </h5>
                <p className="text-m text-white">
                    {children}
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const {price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xm font-bold text-white"> Rp{" "} {price.toLocaleString('id-ID', {styles:'currency', currency: 'IDR'})}</span>
            <Button classname="bg-blue-600 text-xs " onClick={() =>handleAddToCart(id)}>Add to Card</Button>
        </div>
    );
};

CartProduct.Header = Header;
CartProduct.Body = Body;
CartProduct.Footer= Footer;

export default CartProduct;