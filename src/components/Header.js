import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinesStatus";
import Grocery from "./Grocery";

const Appheader = () => {

    const onlineStatus = useOnlineStatus();

    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className="flex justify-between bg-amber-50 m-2 shadow-md font-mono">
            <div className="logo-container">
                <img className="w-29 p-2 relative rounded-full" src={LOGO_URL} alt="burger" />
                <h3 className="absolute bottom-146 left-7 text-amber-950 font-bold font-sans text-xl">CraveLy</h3>
            </div>
            <div className="flex items-center text-xl font-bold ">
                <ul className="flex p-4 gap-5">
                    <li className="p-2 bg-amber-100 rounded-md hover:bg-amber-400"><Link to="/">Home</Link></li>
                    
                    <li className="p-2 bg-amber-100 rounded-md hover:bg-amber-400"><Link to="/about">About</Link></li>

                    <li className="p-2 bg-amber-100 rounded-md hover:bg-amber-400"><Link to="/contact">Contact</Link></li>

                    <li className="p-2 bg-amber-100 rounded-md hover:bg-amber-400"><Link className="cart-logo">🛒Cart</Link></li>

                    <li className="p-2 bg-amber-100 rounded-md hover:bg-amber-400"><Link to="/grocery">Grocery</Link></li>
                    
                    <li className="p-2 bg-red-200 rounded-md hover:bg-red-400"><button className="login-btn" 
                        onClick = { () => {
                            loginBtn === "Login" 
                                    ? setLoginBtn("Logout")
                                    : setLoginBtn("Login");
                    }}>
                    {loginBtn}</button></li>
                    <li className="px-3">{onlineStatus ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    );
};

export default Appheader;