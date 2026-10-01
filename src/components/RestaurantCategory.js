import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
        <div>
           <div className=" w-6/12 p-8 mb-6 m-auto  font-mono bg-gray-100 shadow-lg rounded-2xl">
           <div className="font-bold text-lg flex justify-between cursor-pointer" onClick={handleClick}>
            <span>{data.category}({data.items.length})</span>
            <span>⬇️</span>
           </div>

            { showItems && <MenuItemList items={data.items}/>}
            </div>

        </div>
    )
}

export default RestaurantCategory;