import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch action
        dispatch(addItem(item));
    };

    return (
        <div className="">
            {items.map((item) => <div key={item.id}>
                <div className="flex justify-between items-center border-b-2 border-gray-300 m-12 py-2">
                    <div className="  text-start">
                    <span className="font-semibold">{item.name}</span><br/>
                    <span>₹{item.price}</span>
                    </div>

                    <div className="">
                        <img className="w-24 h-15" src="https://tse3.mm.bing.net/th/id/OIP.DIFPCr1lrCeRF96gAcedzgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                        <div className="absolute">
                            <button className="border border-gray-400 text-white text-sm bg-black font-semibold cursor-pointer ml-7 px-1 rounded-sm shadow-lg"
                            onClick={() => handleAddItem(item)}>
                                Add+
                            </button>
                        </div>
                    </div>
                                       
                </div>
                

            </div>)}
        </div>
    )
}

export default MenuItemList;