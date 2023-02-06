import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentData, setProducts} from "../redux/currentOrder";
import axios from "axios";

const OrderCode = ({takeout, setTakeout}) => {
    const dispatch = useDispatch();
    const currentOrder = useSelector((state) => state.currentOrder.order)
    const randomCode = Math.ceil(Math.random() * 100)
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 m-12 mb-24 text-center flex-col">
                <div className="p-10 text-6xl font-bold">Your code: #{randomCode}</div>
                <Link to="/" onClick={() => {
                    dispatch(setProducts([]))
                    dispatch((setCurrentData(null)))
                    setTakeout(false)
                    console.log(currentOrder)
                    const temp = JSON.stringify({data: [...currentOrder]})
                    axios.post('http://127.0.0.1:5000/stats/post', temp, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((res) => console.log(res))
                }}>
                    <button className="p-6 text-5xl rounded-3xl font-black text-white bg-orange-500 hover:bg-orange-300 hover:text-orange-700">Back to main menu</button>
                </Link>
                <div className="p-10">
                    <Link to="/getstarted/payfor/opinion">
                        <button className="p-4 text-3xl rounded-2xl font-black text-white bg-blue-500 hover:bg-blue-300 hover:text-blue-700">Send opinion</button>
                    </Link>

                </div>
                <div className="p-10 text-2xl font-bold">Enjoy!</div>
            </div>
        </div>
    )
}
export default OrderCode;