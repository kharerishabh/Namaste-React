import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../redux-store/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className="text-center m-4 p-4 pb-2">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="border w-6/12 m-auto">
        {cartItems.length > 0 && <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
          Clear Cart
        </button>}
        {cartItems.length === 0 && <h1 className="font-bold mt-2">Cart is empty, Add items to the cart</h1>}
        <ItemLists items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
