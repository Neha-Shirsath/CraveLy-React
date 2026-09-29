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
        <Link to={`/restaurants/${id}`}>
            <div className="p-4 m-4 w-75 h-92 bg-gray-100 rounded-lg hover:bg-gray-200">

                <img
                    className="w-70 h-45 rounded-lg"
                    alt="cuisine"
                    src={IMG_URL + cloudinaryImageId}
                />

                <h3 className="font-bold text-lg font-sans py-1">{name}</h3>
                <p className="text-gray-800">{cuisines.join(", ")}</p>
                <h4 className="text-gray-800">{costForTwo}</h4>
                <h4 className="text-gray-800">⭐ {avgRating}</h4>
                <p className="text-gray-800">{locality}</p>

            </div>
        </Link>
    );
};

export default ResCard;