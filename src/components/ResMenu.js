import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null || resInfo === undefined) {
        return <Shimmer />;
    }

    const { name, costForTwo, rating, menu } = resInfo;

    return (
        <div className="menu">

            <h1>{name}</h1>

            <h2>{costForTwo}</h2>

            <h2>{rating}</h2>

            <ul className="menu-items">

                {menu?.map((category) =>
                    category.items?.map((item) => (
                        <li key={item.id}>
                            {item.name} - Rs.{item.price}
                        </li>
                    ))
                )}

            </ul>

        </div>
    );
};

export default ResMenu;