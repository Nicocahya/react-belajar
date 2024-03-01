import Button from "../component/Element/Button";
import CardProduct from "../component/Fragment/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/image/sepatu1.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Quibusdam, expedita?
                </CardProduct.Body>
                <CardProduct.Footer price="1.000.000"/>
            </CardProduct>

            <CardProduct>
                <CardProduct.Header image="/image/sepatu1.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Quibusdam, expedita?
                </CardProduct.Body>
                <CardProduct.Footer price="1.000.000"/>
            </CardProduct>
        </div>
    )
}

export default ProductsPage;