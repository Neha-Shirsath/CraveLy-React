import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinesStatus";

const Appheader = () => {

    const onlineStatus = useOnlineStatus();

    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="burger" />
                <h3 className="name">CraveLy</h3>
            </div>
            <div className="items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    
                    <li><Link to="/about">About Us</Link></li>

                    <li><Link to="/contact">Contact Us</Link></li>

                    <li><Link className="cart-logo">🛒Cart</Link></li>
                    <li><button className="login-btn" 
                        onClick = { () => {
                            loginBtn === "Login" 
                                    ? setLoginBtn("Logout")
                                    : setLoginBtn("Login");
                    }}>
                    {loginBtn}</button></li>
                    <li className="active-logo">{onlineStatus ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    );
};

export default Appheader;