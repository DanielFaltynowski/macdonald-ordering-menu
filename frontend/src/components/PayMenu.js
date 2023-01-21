import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const PayMenu = () => {
    const order = useSelector((state) => state.currentOrder.order);
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 m-12 mb-24">
                <div className="flex justify-around">
                    <div className="shadow-md shadow-gray-300 p-10 rounded-2xl text-center flex justify-between items-center gap-5">
                        <div>
                            {order.map(product => (
                                <div key={product.id} className="flex gap-10 mb-10">
                                    <div className="rounded-full w-32 h-32 bg-gray-400"></div>
                                    <div className="">
                                        <div className="text-6xl font-black p-5">{product.name}   {product.amount}x</div>
                                        <div className="p-2 font-black">{product.price}$</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-24">
                <Link to="/getstarted/payfor/ordercode" className="p-7 rounded-3xl bg-green-600 text-white font-bold text-4xl hover:bg-green-300 hover:text-green-800">
                    <button>Pay</button>
                </Link>
            </div>
        </div>
    )
}
export default PayMenu;