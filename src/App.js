import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Appheader from "./components/Header";
import Appbody from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    
    const [userName, setUserName] = useState()

    useEffect(() => {
        const data = {
            name: "Neha",
        };
        setUserName(data.name)
    },[]);



    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className="app">
                <Appheader/>
                <Outlet/>
            </div>
        </UserContext.Provider>

        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Appbody/>
            },
            {
                path : "/about",
                element : <About/>,
            },
            {
                path : "/contact",
                element : <Contact/>,
            },
            {
                path : "/grocery",
                element : (<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>),
            },
            {
                path : "/restaurants/:resId" ,
                element : <ResMenu/>,
            },
            {
                path : "/cart" ,
                element : <Cart/>,
            }
        ]
    }
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={appRouter}/>)
