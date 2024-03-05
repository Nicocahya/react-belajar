import { Fragment, useState } from "react";
import Button from "../component/Element/Button";
import CartProduct from "../component/Fragment/CardProduct";
import Counter from "../component/Fragment/Counter";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 900000,
        image: "/image/sepatu1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
    },

    {
        id: 2,
        name: "Sepatu Lawas",
        price: 500000,
        image: "/image/sepatu1.jpg",
        description: `Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
    },

    {
        id: 3,
        name: "Sepatu Import",
        price: 750000,
        image: "/image/sepatu1.jpg",
        description: `Quibusdam, expedita? Lorem ipsum dolor sit amet sadam alok terizla lunox epep emel`
    }
]

const email = localStorage.getItem("email");

const ProductsPage = () => {

    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);

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

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">{email}
                <Button classname=" ml-5 bg-black" onClick={handleLogout}>Log Out</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-w">
                    {products.map((product) => (
                        <CartProduct key={product.id}>
                            <CartProduct.Header image={product.image} />
                            <CartProduct.Body name={product.name}>
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
                            {cart.map((item) => {
                                const product = products.find (
                                    (product) => product.id === item.id
                                    );
                                    return (
                                        <tr key={item.id}>
                                            <td>{product.name}</td>
                                            <td>
                                            Rp{" "} 
                                            {product.price.toLocaleString('id-ID', {styles:'currency', currency: 'IDR'})}
                                            </td>
                                            <td>{item.qty}</td>
                                            <td> Rp {(item.qty * product.price).toLocaleString ('id-ID',
                                             {styles:'currency', 
                                             currency: 'IDR'
                                             })}
                                             </td>
                                        </tr>
                                    )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-5 flex justify-center mb-5">
                <Counter></Counter>
            </div>
        </Fragment>
    )
}

export default ProductsPage;