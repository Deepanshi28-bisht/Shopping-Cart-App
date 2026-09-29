import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";

const ProductsCard = ({ data }) => {
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const currentProduct = productState.products.find(
    (product) => product.id === data.id,
  );
  const cartItem = cartState.cart.find((item) => item.id === data.id);
  const remainingStock = currentProduct.stock - (cartItem?.qty || 0);
  const isItemInCart = cartState.cart.some((item) => item.id === data.id);
  function handleAddtoCart(product) {
    if (isItemInCart) {
      cartDispatch({
        type: "Remove_From_Cart",
        payload: product.id,
      });
      return;
    }
    if (currentProduct.stock === 0) return;
    cartDispatch({
      type: "Add_To_Cart",
      payload: product,
    });
  }
  function handleIncrease(productId) {
    productDispatch({
      type: "INCREASE_STOCK",
      payload: productId,
    });
  }
  function handleDecrease(productId) {
    productDispatch({
      type: "DECREASE_STOCK",
      payload: productId,
    });
  }
  return (
    <div className="flex flex-col gap-2 items-start">
      <div>
        <img src="/images/laptop.webp" alt="product-img" />
      </div>
      <p>{data.description}</p>
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col gap-1 ">
          <span>{data.brand}</span>
          <span className="font-bold text-lg">{data.name}</span>
          <span>${data.price}</span>
        </div>
        {userState?.user?.role === "admin" && (
          <div className="flex gap-6 items-center justify-start text-2xl font-light border-2 border-amber-300 rounded-full px-4 py-1">
            <button onClick={() => handleDecrease(data.id)}>-</button>
            <div className="text-base font-normal">
              <span className="text-xl font-bold">{currentProduct.stock}</span> in stock
            </div>
            <button onClick={() => handleIncrease(data.id)}>+</button>
          </div>
        )}
      </div>

      {userState?.user?.role === "customer" && (
        <>
          {
            currentProduct.stock === 0 ? <button
              className="bg-gray-400 text-white py-2 px-4 rounded-md text-sm font-bold cursor-not-allowed"
              disabled
            >Sold Out</button> :
              <button
                className={`${isItemInCart ? "bg-red-500" : "bg-amber-500"} text-white py-2 px-4 rounded-md text-sm font-bold cursor-pointer`}
                onClick={() => handleAddtoCart(data)}
              >
                {isItemInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
          }

        </>
      )}
    </div>
  );
};

export default ProductsCard;
