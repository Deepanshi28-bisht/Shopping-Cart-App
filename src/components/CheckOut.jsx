import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CheckOut = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(CartContext);
    const currentCartData = state.cart?.find((item) => item.id == Number(id));
    console.log("currentCartData", currentCartData);
    const totalPrice = currentCartData
        ? currentCartData.price * currentCartData.qty
        : 0;
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [couponApplied, setCouponApplied] = useState(false);
    console.log("totalPrice", totalPrice);
    const couponArr = ["SAVE10", "FLAT20", "HOME15"];
    const validation = () => {
        if (couponApplied) {
            alert("You have already applied a coupon")
            return
        }
        const code = coupon.trim().toUpperCase();
        if (!code) {
            alert("please enter code first")
            return
        }
        if (!couponArr.includes(code)) {
            alert("invalid coupon code");
        }
        if (code === "SAVE10" && totalPrice >= Number(50)) {
            const discountPrice = totalPrice * 0.1;
            setDiscount(discountPrice);
            setCouponApplied(true)
        } else if (code === "FLAT20" && totalPrice >= Number(100)) {
            setDiscount(20);
            setCouponApplied(true)
        } else if (code === "HOME15" && currentCartData?.category?.toLowerCase() === "home") {
            const discountPrice = totalPrice * 0.15;
            setDiscount(discountPrice);
            setCouponApplied(true)
        } else {
            setDiscount(0);
        }
        setCoupon("");
    };
    const discoutBalance = totalPrice - discount;
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-2xl text-center mb-4">Checkout</h2>
                <div className="flex flex-col items-start justify-center gap-2 w-full shadow mx-auto max-w-[400px] py-2 px-4 text-2xl">
                    <span>{currentCartData?.name}</span>
                    <span>{currentCartData?.category}</span>
                    <span className="text-base">Price: ${currentCartData?.price}</span>
                    <span className="text-base">Quantity: {currentCartData?.qty}</span>
                    <div className="flex justify-between text-xl w-full">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    {
                        totalPrice >= 50 &&
                        <div className="text-base w-full flex justify-start items-center gap-4">
                            <label htmlFor="coupon">Coupon</label>
                            <input
                                type="text"
                                id="coupon"
                                placeholder="Enter coupon code"
                                className="border border-[#ccc] py-1 px-2 outline-none rounded-lg uppercase placeholder:lowercase"
                                value={coupon}
                                disabled={couponApplied}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <button className="bg-green-500 text-white text-sm py-1 px-2 font-bold rounded disabled:bg-gray-400
             disabled:text-gray-200 disabled:opacity-50" disabled={couponApplied} onClick={validation}>{couponApplied ? "Applied" : "Apply"}</button>
                        </div>
                    }
                    {!!discount &&
                        <div className="flex justify-center flex-col gap-4 text-xl w-full">
                            <div className="flex justify-between text-xl w-full">
                                <span>discount:</span>
                                <span>{discount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xl w-full">
                                <span>Total:</span>
                                <span>${discoutBalance.toFixed(2)}</span>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </section>
    );
};

export default CheckOut;
