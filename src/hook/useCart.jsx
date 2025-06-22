import { useEffect, useState } from "react";

export const useCart = () => {
    const [cartItems, setCartItems] = useState();

    useEffect(() => {
        const data = localStorage.getItem("my_cart",)
        setCartItems(!!JSON.parse(data) ? JSON.parse(data) : [])
    }, [])

    useEffect(() => {
        if (cartItems !== undefined)
            localStorage.setItem("my_cart", JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (itemId) => {
        const existingItem = cartItems.find(item => item.id === itemId);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === itemId ? { ...item, count: item.count + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { id: itemId, count: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems =>
            prevItems
                .map(item =>
                    item.id === itemId ? { ...item, count: item.count - 1 } : item
                )
                .filter(item => item.count > 0)
        );
    };

    return { cartItems, addToCart, removeFromCart };
} 