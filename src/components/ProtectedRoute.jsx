import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(UserContext);



  if (!state.user) {
    console.log("No user → going to login");
    return <Navigate to="/login" replace />;
  }

  console.log("User exists → showing products");

  return children;
};

export default ProtectedRoute;