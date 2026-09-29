import { useState, useEffect } from "react";
import ResMenuData from "./ResMenuData";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = () => {

        const restaurant = ResMenuData.restaurants.find(
            (res) => res.id === resId
        );

        console.log("Selected restaurant:", restaurant);

        setResInfo(restaurant);
    };

    return resInfo;
};

export default useRestaurantMenu;