import { Fragment, useEffect, useState } from "react";
import Button from "../component/Element/Button";
import CartProduct from "../component/Fragment/CardProduct";
import { getUsername } from "../services/auth.service";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layout/Navbar";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);
 useLogin();

    useEffect (() => {
                getProducts((data) => {
            setProducts(data);
        });
    });

    return (
        <Fragment>
            <Navbar />
            <div className="flex justify-center py-10">
                <div className="w-4/6 flex flex-wrap">
                {products.length > 0 && 
                products.map((product) => (
                        <CartProduct key={product.id}>
                            <CartProduct.Header image={product.image} id={product.id} />
                            <CartProduct.Body name={product.title}>
                                {product.description}
                            </CartProduct.Body>
                            <CartProduct.Footer price={product.price}
                                id={product.id}/>
                        </CartProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Card</h1>
                    <TableCart products={products} />
                </div>
            </div>
            {/* <div className="mt-5 flex justify-center mb-5">
                <Counter></Counter>
            </div> */}
        </Fragment>
    )
}

export default ProductsPage;