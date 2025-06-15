import { useState } from "react";

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

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