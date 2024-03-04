import { Fragment } from "react";
import Button from "../component/Element/Button";
import CardProduct from "../component/Fragment/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "1.000.000",
        image: "/image/sepatu1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
    },

    {    
        id: 2,
        name: "Sepatu Lawas",
        price: "500.000",
        image: "/image/sepatu1.jpg",
        description: `Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
    },

    {    
        id: 3,
        name: "Sepatu Import",
        price: "3.500.000",
        image: "/image/sepatu1.jpg",
        description: `Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
    }
]

const email = localStorage.getItem("email");

const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">{email}
            <Button classname=" ml-5 bg-black" onClick={handleLogout}>Log Out</Button>
            </div>
                <div className="flex justify-center py-5">
                    {products.map ((product) => (
                        <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                        {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price}/>
                        </CardProduct>
                    ))}
                </div>
        </Fragment>
    )
}

export default ProductsPage;