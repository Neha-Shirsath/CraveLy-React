import ResMenuData from "../utils/ResMenuData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {

    // const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)

    // useEffect(() => {
    //     fetchMenu()
    // },[]);

    // const fetchMenu = async() => {
    //     // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER")
    //     // const json = await data.json();

    //     // console.log(json)
    //     // setResInfo(json.data)
    //     console.log(ResMenuData);
    //     setResInfo(ResMenuData.data);
    // };

    
    if (resInfo === null)  return (<Shimmer/>) ;

    const { name, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return (  
    <div className="menu">
        <h1>{name}</h1>
        <h2>{costForTwoMessage}</h2>
        <h2>{avgRating}</h2>
        {/* <img src="" /> */}

        <ul className="menu-items">
            {itemCards.map(item => (<li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>))}
        </ul>
    </div>
    )
}

export default ResMenu;