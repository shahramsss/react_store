import { PRODUCTS } from "../../data/products"
import { Product } from "../../products"


export const Shop = () => {
    return (
        <div className="container">
            <h1>shop</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {PRODUCTS.map((producData) => <Product key={producData.id} data={producData} />)}
            </div>
        </div>
    )
}