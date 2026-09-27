import ResCard from "./restaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SEARCH_ICON } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlinesStatus";

const Appbody = () => {

    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);

    const [searchText, setSearchText] = useState("")

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


    return listOfRes?.length === 0 ? (<Shimmer/>) : (
        <div className="app-body">
            <div className="searching">
                <div className="search-container">
                    {/* <img src= {SEARCH_ICON} /> */}
                    <input className="search" id="search" type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    placeholder="Search for restaurant, cuisine or a dish"
                    />

                    <button className="search-btn" onClick={() => {
                        const filteredBySearch = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredListOfRes(filteredBySearch); 
                    }} 
                    
                    >Search</button>
                </div>

            <div className="filter">
                <button className="top-res" onClick={() => { 
                    const filteredList = listOfRes.filter((res) => (res.info.avgRating > 4.2));
                    setFilteredListOfRes(filteredList);
                }}>Top Restaurants</button>
            </div>
            </div>
              <div className="res-container">
                {
                  filteredListOfRes?.map((restaurant) => (<ResCard key={restaurant.info.id} resData = {restaurant}/>))
                }
              </div>
        </div>
    )
}

export default Appbody;





