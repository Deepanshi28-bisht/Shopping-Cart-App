import { useContext } from "react";
import logo from "/images/shopping-logo.webp";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const NavBar = () => {
    const { state: authState, dispatch: authDispatch } = useContext(UserContext);
    const { state: cartState, dispatch: cartDipatch } = useContext(CartContext);
    const navigate = useNavigate();
    function loginBtn() {
        navigate("/login");
    }
    function logoutBtn() {
        localStorage.removeItem("loginUser");
        authDispatch({
            type: "LOGOUT",
            payload: null,
        });
        navigate("/login");
    }
    return (
        <nav className="py-2 px-8 bg-[#333]">
            <div className="flex justify-between items-center text-[#fff] text-base font-bold tracking-wider">
                <div className="w-full max-w-[120px] h-11 rounded-xl px-1 overflow-hidden bg-white">
                    <img src={logo} alt="logo-img" className="h-full w-full" />
                </div>

                <ul className="flex gap-6 items-center justify-center">
                    <li> <Link to="/products">Products  </Link></li>
                    <li>
                        <Link to="/privacy">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>Contact us</li>
                </ul>
                <div className="flex items-center gap-4 justify-center">
                    <button
                        className="bg-amber-500 py-2 px-4 rounded-xl"
                        onClick={authState?.user ? logoutBtn : loginBtn}
                    >
                        {authState.user ? "Logout" : "Login"}
                    </button>
                    {
                        authState?.user?.role === "customer" &&
                        <Link to="/cart">Cart {cartState.cart.length}</Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
