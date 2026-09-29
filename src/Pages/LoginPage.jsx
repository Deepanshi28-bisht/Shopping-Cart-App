import React, { useContext, useState } from "react";
import Container from "../components/Container";
import { users } from "../data/userData";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { state, dispatch } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const loginUser = users.find(
      (user) => user.username === userName && user.password === password,
    );
    if (loginUser) {
      dispatch({
        type: "LOGIN",
        payload: loginUser,
      });
      localStorage?.setItem("loginUser", JSON.stringify(loginUser));
      if (loginUser) {
        if (loginUser.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/products");
        }
      }
    }
  };

  return (
    <section className="py-10">
      <Container>
        <h2 className="text-3xl mb-8 font-bold text-center">Login Form</h2>
        <form
          onSubmit={handleForm}
          className="shadow-md w-full max-w-[480px] mx-auto py-10 px-8 flex flex-col gap-4 items-start justify-center rounded-xl"
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="username" className="font-bold text-base">
              Username<span className="text-red-700">*</span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter Your Username"
              className="w-full px-4 py-2 outline-none border border-[#ccc] rounded-2xl"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="username" className="font-bold text-base">
              Password<span className="text-red-700">*</span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 outline-none border border-[#ccc] rounded-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-amber-400 w-full text-white py-2 rounded-2xl font-bold text-base">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default LoginPage;
