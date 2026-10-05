import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-2 p-2 font-mono">
            <h1 className="mt-6 flex justify-center text-3xl font-bold mb-5">Cart🛒</h1>
            <button className="border border-zinc-700 rounded-2xl p-1 ml-160 bg-zinc-200 m-2 text-sm font-bold active:bg-black active:text-white"
            onClick={handleClearCart}>
                Clear Cart
            </button>
            
            <div className="w-6/12 m-auto font-mono bg-gray-100 shadow-lg rounded-2xl p-2">
                {cartItems.length === 0 && <h1>Your Cart is Empty☹️ Add Items to Cart!!</h1>}
                <MenuItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;

