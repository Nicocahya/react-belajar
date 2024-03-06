import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../component/Element/Button";
import CartProduct from "../component/Fragment/CardProduct";
import Counter from "../component/Fragment/Counter";
import { getProducts } from "../services/product.service";

// const products = [
//     {
//         id: 1,
//         name: "Sepatu Baru",
//         price: 1900000,
//         image: "/image/sepatu1.jpg",
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//         Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
//     },

//     {
//         id: 2,
//         name: "Sepatu Lawas",
//         price: 1200000,
//         image: "/image/sepatu1.jpg",
//         description: `Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
//     },

//     {
//         id: 3,
//         name: "Sepatu Import",
//         price: 3000000,
//         image: "/image/sepatu1.jpg",
//         description: `Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
//     }
// ]

const email = localStorage.getItem("email");

const ProductsPage = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState (0);
    const [products, setProducts] = useState([]);

    useEffect (() => {
        setCart (JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        getProducts((data) => {
            console.log(data)
        });
    }, [])

    useEffect (() => {
                getProducts((data) => {
            setProducts(data);
        });
    });

    useEffect(() => {
        if(products.length > 0 &&
            cart.length > 0) {
            const sum = cart.reduce ((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem ("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
        if(cart.find (item => item.id === id )) {
            setCart(
                cart.map (item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}]);
        }
    };

    // useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">{email}
                <Button classname=" ml-5 bg-black" onClick={handleLogout}>Log Out</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                {products.length > 0 && 
                products.map((product) => (
                        <CartProduct key={product.id}>
                            <CartProduct.Header image={product.image} />
                            <CartProduct.Body name={product.title}>
                                {product.description}
                            </CartProduct.Body>
                            <CartProduct.Footer price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart} />
                        </CartProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Card</h1>
                    {/* <ul>
                        {cart.map((item) => (
                            <li key={item}>{item.id}</li>
                        ))}
                    </ul> */}
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.length > 0 && 
                        cart.map((item) => {
                                const product = products.find (
                                    (product) => product.id === item.id
                                    );
                                    return (
                                        <tr key={item.id}>
                                            <td>{product.title.substring(0, 10)}...</td>
                                            <td>$ 
                                                {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}
                                            </td>
                                            <td>{item.qty}</td>
                                            <td> $ {(item.qty * product.price).toLocaleString ('id-ID',
                                             {styles:'currency', 
                                             currency: 'USD'
                                             })}
                                             </td>
                                        </tr>
                                    )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                <b>Total Price</b>
                                </td>
                                <td>
                                <b>
                                 $ {" "}    
                                {totalPrice.toLocaleString
                                ('id-ID', 
                                {styles:'currency', currency: 'USD'}
                                )} 
                                </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="mt-5 flex justify-center mb-5">
                <Counter></Counter>
            </div> */}
        </Fragment>
    )
}

export default ProductsPage;