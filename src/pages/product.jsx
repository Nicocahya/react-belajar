import { Fragment, useContext, useEffect, useState } from "react";
import CartProduct from "../component/Fragment/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../component/LayOut/Navbar";
import TableCard from "../component/Fragment/TableCard";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
    // const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { isDarkMode } = useContext(DarkMode);
    const [products, setProducts] = useState([]);
    useLogin();

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    });

    return (
        <Fragment>
            <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
                <div className="w-4/6 flex flex-wrap ">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CartProduct key={product.id}>
                                <CartProduct.Header image={product.image} id={product.id} />
                                <CartProduct.Body name={product.title}>
                                    {product.description}
                                </CartProduct.Body>
                                <CartProduct.Footer price={product.price}
                                    id={product.id} />
                            </CartProduct>
                        ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Card</h1>
                    <TableCard products={products} />
                </div>
            </div>
            {/* <div className="mt-5 flex justify-center mb-5">
                <Counter></Counter>
            </div> */}
        </Fragment>
    )
}

export default ProductsPage;