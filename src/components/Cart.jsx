import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import CartsCard from "./CartsCard";
import Container from "./Container";

const Cart = () => {
    const { state } = useContext(CartContext);
   const subtotal = useMemo(() => {
  return state.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
}, [state.cart]);
    console.log("total", subtotal);
    return (
        <section className="py-10">
            <Container>
                <div className="grid grid-cols-1 gap-5 mb-4">
                    {state?.cart.map((item) => (
                        <CartsCard key={item.id} data={item} />
                    ))}
                </div>
                <hr />
                <div className="flex justify-between w-full items-center">
                    <span>Total Price</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
            </Container>
        </section>
    );
};

export default Cart;
