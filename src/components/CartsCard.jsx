import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const CartsCard = ({ data }) => {
    const { dispatch } = useContext(CartContext);
    const handleRemoveCart = (data) => {
        dispatch({
            type: "Remove_From_Cart",
            payload: data.id
        })
    }
    const increaseQty = (id) => {
        dispatch({
            type: "INCREASE_QTY",
            payload: id
        })
    }
    const decreaseQty = (id) => {
        dispatch({
            type: "DECREASE_QTY",
            payload: id
        })
    }
    return (
        <div className="flex justify-start gap-20 items-center w-full">
            <div>
                <img src="/images/laptop.webp" alt="product-img" />
            </div>
            <div className='flex flex-col gap-4 items-start justify-center'>
                <p className='text-2xl font-bold'>{data.description}</p>
                <div className="flex flex-col gap-1 ">
                    <span className='text-base'>{data.brand}</span>
                    <span className="font-bold text-lg">{data.name}</span>
                    <span className='text-base font-bold'>${data.price * data.qty}</span>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-md text-sm font-bold"
                        onClick={() => handleRemoveCart(data)}
                    >
                        Remove From Cart
                    </button>
                    <div className="flex gap-6 items-center justify-start text-2xl font-light border-2 border-amber-300 rounded-full px-4 py-1">
                        <button onClick={() => decreaseQty(data.id)}>-</button>
                        <span className="text-xl font-bold">{data.qty}</span>
                        <button onClick={() => increaseQty(data.id)}>+</button>
                    </div>
                    <Link
                        to={`/cart/${data.id}/checkout`}
                        className="bg-green-500 text-white py-2 px-4 rounded-md text-sm font-bold"

                    >
                        Check Out
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartsCard