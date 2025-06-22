import React, { useContext } from "react"
import { PRODUCTS } from "../../data/products"
import { ShopContext } from "../../context/shopContext"
import { Product } from "../../products"

export const Cart = () => {
    const { cartItems } = useContext(ShopContext)
    return (
        <div className="container">
            <React.Fragment>
                <h2>your cart items</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {PRODUCTS.map((p) => {
                            if (cartItems?.some((i) => i.id === p.id && i.count > 0))
                                return <Product data={p} />
                        })}
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}