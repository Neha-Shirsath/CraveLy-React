import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinesStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Appheader = () => {

    const onlineStatus = useOnlineStatus();

    const [nightMode, setNightMode] = useState(false);
    const [loginBtn, setLoginBtn] = useState("Login");

    const { loggedInUser } = useContext(UserContext)

    const toggleNightMode = () => {
        setNightMode(!nightMode);
        document.documentElement.classList.toggle("dark");
    };

    //subscribing to the cart using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-amber-50 dark:bg-neutral-400 m-2 shadow-md font-mono">

            <div className="logo-container">
                <img
                    className="w-29 p-2 relative rounded-full"
                    src={LOGO_URL}
                    alt="burger"
                />

                <h3 className="absolute bottom-146 left-7 text-amber-950 font-bold font-sans text-xl">
                    CraveLy
                </h3>
            </div>

            <div className="flex items-center text-lg font-bold dark:text-white">
                <ul className="flex p-3 gap-5 items-center">

                    <li className="p-2 bg-amber-100 dark:bg-neutral-700 dark:hover:bg-black rounded-md hover:bg-amber-400">
                        <Link to="/">🏠Home</Link>
                    </li>

                    <li className="p-2 bg-amber-100 dark:bg-neutral-700 dark:hover:bg-black rounded-md hover:bg-amber-400">
                        <Link to="/about">ℹ️About</Link>
                    </li>

                    <li className="p-2 bg-amber-100 dark:bg-neutral-700 dark:hover:bg-black rounded-md hover:bg-amber-400">
                        <Link to="/contact">📞Contact</Link>
                    </li>

                    <li className="p-2 bg-amber-100 dark:bg-neutral-700 dark:hover:bg-black rounded-md  hover:bg-amber-400">
                        <Link to="/grocery">🛍️Grocery</Link>
                    </li>
                     
                    <li className="p-2 bg-amber-100 dark:bg-neutral-700 dark:hover:bg-black rounded-md hover:bg-amber-400">
                        <Link to="/cart">🛒{cartItems.length}</Link>
                    </li>

                    

                    <li className="p-2 dark:text-white bg-red-200 dark:bg-blue-950 dark:hover:bg-blue-900 rounded-md hover:bg-red-400">
                        <button className="cursor-pointer"
                            onClick={() => {
                                loginBtn === "Login"
                                    ? setLoginBtn("Logout")
                                    : setLoginBtn("Login");
                            }}
                        >
                            {loginBtn}
                        </button>
                    </li>

                    <li className="bg-emerald-300 p-2 rounded-md hover:bg-emerald-500 dark:text-white dark:bg-emerald-500 dark:hover:bg-emerald-300">
                        👤{loggedInUser}
                    </li>

                    <li className="p-1">
                        {onlineStatus ? "Online🟢" : "Offline🔴"}
                    </li>

                    {/* DARK MODE BUTTON */}
                    <li
                        className="p-1 text-lg font-md cursor-pointer"
                        onClick={toggleNightMode}
                    >
                        {nightMode ? "☀️Light" : "🌙Dark"}
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Appheader;