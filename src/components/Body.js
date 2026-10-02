import ResCard, { WithVegRes } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { SEARCH_ICON } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlinesStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Appbody = () => {

    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);

    const [searchText, setSearchText] = useState("")


    const VegRes = WithVegRes(ResCard, "VEG", "bg-green-800");
    const NonVegRes = WithVegRes(ResCard, "NON-VEG", "bg-red-800");
    

    useEffect(() => {
        console.log("After rendered");
        fetchData()
    } , [])
    
   const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    console.log(json);
    
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRes(restaurants)
    setFilteredListOfRes(restaurants)
    
   };


   const onlineStatus = useOnlineStatus();

   if (onlineStatus === false) 
    return (
       <h1 className="offline-msg">Looks like You're offline!!! Please check your internet connection...</h1>
    );

    const { loggedInUser, setUserName } =  useContext(UserContext)

    return listOfRes?.length === 0 ? (<Shimmer/>) : (
        <div className="app-body dark:bg-neutral-400">
            <div className="searching flex m-4 p-4 ml-8">
                <div className="search-container">
                    {/* <img src= {SEARCH_ICON} /> */}
                    <input className="search border border-solid border-black w-74  py-1 rounded-md px-2 dark:text-black" id="search" type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    placeholder="Search for restaurant, cuisine or a dish"
                    />

                    <button className="search-btn py-1 px-2 m-2 bg-red-200 rounded-md font-mono active:bg-red-400 hover:shadow-lg cursor-pointer dark:bg-pink-900 dark:text-white dark:active:bg-red-400"
                     onClick={() => {
                        const filteredBySearch = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredListOfRes(filteredBySearch); 
                    }} 
                    
                    >🔎Search</button>
                </div>

            <div className="filter px-2 py-1 m-2 mx-1 bg-amber-100 rounded-lg font-mono active:bg-amber-400 hover:shadow-lg dark:bg-blue-950 dark:text-white dark:active:bg-blue-600 ">
                <button className="cursor-pointer" onClick={() => { 
                    const filteredList = listOfRes.filter((res) => (res.info.avgRating > 4));
                    setFilteredListOfRes(filteredList);
                }}>⭐Top Rated</button>
            </div>

             
            <div className="filter px-2 py-1 m-2 mx-1 bg-zinc-100 rounded-lg font-mono hover:shadow-lg dark:bg-blue-950 dark:text-white dark:active:bg-blue-600 ">
                <label>UserName </label>
                <input className="border-2 rounded-lg border-zinc-700 px-1"
                value={loggedInUser} 
                onChange={(e) => setUserName(e.target.value)} ></input>
            </div>

            </div>
              <div className="flex flex-wrap justify-evenly items-center">
                {
                  filteredListOfRes?.map((restaurant) => 
                    (
                        <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`} >
                            {restaurant.info.veg ? ( 
                                <VegRes resData={restaurant} />)
                                 : ( <NonVegRes resData={restaurant}/> )
                            }
                        </Link>
                    ))}
              </div>
        </div>
    )
}

export default Appbody;





