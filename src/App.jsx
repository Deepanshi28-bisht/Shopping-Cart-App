import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./context/UserContext";
import ProductsList from "./products/ProductsList";
import { getDataFromLocal } from "./utils /getdatafromLocal";
import AdminPage from "./Pages/AdminPage";
import Cart from "./components/Cart";
import Privacy from "./components/Privacy";
import CheckOut from "./components/CheckOut";

const App = () => {
  const { state, dispatch } = useContext(UserContext);
  const currentUserData = getDataFromLocal("loginUser");
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUserData) {
      navigate("/login");
      return;
    }
    if (currentUserData.role == "admin") {
      navigate("/admin")
    } else {
      navigate("/products")
    }
    dispatch({
      type: "UPDATE",
      payload: currentUserData,
    });
  }, []);


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsList />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/cart/:id/checkout" element={<CheckOut />} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
    </>
  );
};

export default App;
