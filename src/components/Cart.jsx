import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartsCard from "./CartsCard";
import Container from "./Container";

const Cart = () => {
  const { state } = useContext(CartContext);

  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-5">
          {state?.cart.map((item) => (
            <CartsCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
