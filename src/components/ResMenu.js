import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    const [showIndex, setShowIndex] = useState(null);


    if (resInfo === null || resInfo === undefined) {
        return <Shimmer />;
    }

    const { name, costForTwo, rating, menu } = resInfo;


    const categories = resInfo?.menu;


    return (
        <div className="flex-col justify-centre text-center">

            <div className="mb-5  w-6/12 bg-yellow-100  mt-5 rounded-xl py-10 inline-block">
                <h1 className="text-3xl font-bold ">{name}</h1>

                <h2 className=" m-2 font-medium">{costForTwo} • {rating}⭐</h2>
            </div>
            
            {/* //controlled componennt */}
            {categories.map((category, index) => {return <RestaurantCategory  
                                            key={category.category} data={category} 
                                            showItems={index == showIndex ? true : false}
                                            setShowIndex={() => setShowIndex(index)}
                                            />})}

            {/* <ul className="menu-items">
                {menu?.map((category) =>
                    category.items?.map((item) => (
                        <div key={item.id} className="">
                            <div className="bg-gray-100 shadow-md m-3 p-4 w-150 h-25 rounded-2xl inline-block text-start hover:bg-gray-200">
                                <p className="font-bold text-md">{item.name}</p>
                                <p className="font-medium">₹{item.price}</p>
                            </div>
                        </div>
                    ))
                )}
            </ul> */}

        </div>
    );
};

export default ResMenu;