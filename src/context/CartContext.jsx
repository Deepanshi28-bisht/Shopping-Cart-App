import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    cart: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Cart":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }],
            };
        case "Remove_From_Cart":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case "INCREASE_QTY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? {
                            ...item,
                            qty: item.qty + 1,
                        }
                        : item,
                ),
            };
        case "DECREASE_QTY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? {
                            ...item,
                            qty: Math.max(1, item.qty - 1),
                        }
                        : item,
                ),
            };
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;
