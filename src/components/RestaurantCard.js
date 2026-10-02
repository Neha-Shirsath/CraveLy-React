import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constants.js";

const ResCard = (props) => {
    const { resData } = props;

    const {
        id,
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
        locality
    } = resData?.info;

    return (
        
            <div className="p-4 m-4 w-75 h-94 bg-gray-100 rounded-lg dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 hover:bg-gray-200 hover:shadow-xl">

                <img
                    className="w-70 h-45 rounded-lg"
                    alt="cuisine"
                    src={IMG_URL + cloudinaryImageId}
                />

                <h3 className="font-bold text-lg font-sans py-1 dark:text-white">{name}</h3>
                <p className="text-gray-800 dark:text-white">{cuisines.join(", ")}</p>
                <h4 className="text-gray-800 dark:text-white">{costForTwo}</h4>
                <h4 className={ 
                  avgRating > 4
                  ? "bg-green-400 inline-block px-1 rounded text-black dark:text-white"
                  : "bg-red-400 inline-block px-1 rounded text-black dark:text-white"
                }>
                 ★{avgRating}
                </h4>
                <p className="text-gray-800 dark:text-white">{locality}</p>

            </div>

    );
};


export const WithVegRes = (ResCard,  label, bgColor) => {
    return (props) => {
        return(
            <div>
                <label className={`absolute ml-4 ${bgColor} text-white px-2 font-mono rounded-br-xl rounded-tl-xl shadow-gray-800`}>
                    {label}
                </label>
                <ResCard {...props} />
            </div>
        );
    };
};

export default ResCard;