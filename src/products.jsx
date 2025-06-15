import { useContext } from "react";
import { ShopContext } from "./context/shopContext";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
    const isIncart = cartItems.some((item) => item.id === id)
    return (
        <div className="col">
            <div className="card h-100">
                <img src={productImage} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                </div>
                <div className="card-footer">
                    <h5 className="card-title">price: {price}$</h5>
                    <button className='btn btn-info w-25' onClick={() => addToCart(id)}>+</button>
                    {isIncart &&<span className="text-body-secondary h5 mx-2">0
                        {cartItems?.filter((row) => row.id === id)[0]?.count}
                        {console.log(cartItems)}
                    </span>}
                    {isIncart &&
                        <button className='btn btn-info w-25' onClick={() => removeFromCart(id)}>-</button>
                    }
                </div>
            </div>
        </div>
    )
}