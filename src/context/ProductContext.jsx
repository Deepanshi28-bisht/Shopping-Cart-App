import { createContext, useReducer, useState } from "react";
import { productsData } from "../data/productsData";

export const ProductContext = createContext();

const initialState = {
    products: productsData,
};

const productCartReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE_STOCK":
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? {
                            ...product,
                            stock: product.stock + 1,
                        }
                        : product,
                ),
            };
            
        default:
            state;
    }
};

const ProductCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productCartReducer, initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductCartProvider;







