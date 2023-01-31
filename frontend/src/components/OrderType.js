import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentData} from "../redux/currentOrder";
import {useEffect} from "react";
import axios from "axios";

const OrderType = ({takeout, setTakeout}) => {
    const data = useSelector((state) => state.currentOrder.data)
    const dispatch = useDispatch()
    const handleTakeoutChoice = () => {
        setTakeout(!takeout)
    }
    return (
        <div className="flex flex-col items-center justify-center">
            {/*{data === null && <div className="w-3/4 flex justify-evenly m-10"><div>Loading...</div></div>}*/}
            <div className="w-3/4 flex justify-evenly m-10">
                <Link to="/getstarted/menu">
                    <div
                        className="w-96 h-96 border border-8 border-solid rounded-3xl flex justify-center items-center hover:bg-gray-50">
                        <div className="text-gray-500 font-black text-6xl">On-Site</div>
                    </div>
                </Link>
                <Link to="/getstarted/menu" onClick={() => handleTakeoutChoice()}>
                    <div
                        className="w-96 h-96 border border-8 border-solid rounded-3xl flex justify-center items-center hover:bg-gray-50">
                        <div className="text-gray-500 font-black text-6xl">Takeout</div>
                    </div>
                </Link>
            </div>
            {/*{(!isPending) && error !== null && <div className="w-3/4 flex justify-evenly m-10"><div>{error}</div></div>}*/}
        </div>
    )
}
export default OrderType;