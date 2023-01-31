import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentData, setProducts} from "../redux/currentOrder";

const OrderCode = ({takeout, setTakeout}) => {
    const dispatch = useDispatch();
    const randomCode = Math.ceil(Math.random() * 100)
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 m-12 mb-24 text-center">
                <div className="p-10 text-6xl font-bold">Your code: #{randomCode}</div>
                <Link to="/" onClick={() => {
                    dispatch(setProducts([]))
                    dispatch((setCurrentData(null)))
                    setTakeout(false)
                }}>
                    <button className="p-6 text-5xl rounded-3xl font-black text-white bg-orange-500 hover:bg-orange-300 hover:text-orange-700">Back to main menu</button>
                </Link>
                <div className="p-10 text-2xl font-bold">Enjoy!</div>
            </div>
        </div>
    )
}
export default OrderCode;