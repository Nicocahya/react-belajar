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

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">

            {products.map ((product) => (
                        <CardProduct>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price}/>
                        </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage;