import { Children } from "react";
import Button from "../Element/Button";


const CartProduct = (props) => {
    const {children} = props;
    return (
            <div className="w-full max-w-64 bg-gray-700 border border-gray-600 rounded-lg shadow mx-5 my-2 flex flex-col justify-between">
                {children}
            </div>
    );       
};

const Header = (props) => {
    const {image} = props;
    return (
        <a href="#">
            <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
        </a>
    );
};

const Body = (props) => {
    const {children, name} = props ;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
            <h3 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)}...</h3>
                <p className="text-xs text-white">{children.substring(0, 100)}...</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const {price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">$ {price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</span>
            <Button classname="bg-teal-500 text-base" onClick={() => handleAddToCart(id)}>Add to cart</Button>
        </div>
    );
};

CartProduct.Header = Header;
CartProduct.Body = Body;
CartProduct.Footer= Footer;

export default CartProduct;