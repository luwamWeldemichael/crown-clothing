import { createContext, useState } from "react";
import cartItem from "../components/cart-item/cart-item";

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems?.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    console.log("Existing", existingCartItem);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id) ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
    }


    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

