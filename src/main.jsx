import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";
import ProductCartProvider from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <UserProvider>
    <CartProvider>
      <ProductCartProvider>
    <App />
    </ProductCartProvider>
    </CartProvider>
  </UserProvider>
</BrowserRouter>
);
