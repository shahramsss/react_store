import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
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

    const contextValue = { cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
