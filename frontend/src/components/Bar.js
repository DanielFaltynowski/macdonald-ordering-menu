import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setBar, setCurrentData, setProducts} from "../redux/currentOrder";
import {round} from "lodash";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";

const Bar = ({takeout, setTakeout}) => {

    // variables
    const dispatch = useDispatch();
    const currentOrder = useSelector((state) => state.currentOrder.order)
    const bar = useSelector((state) => state.currentOrder.bar)
    const [initialCart, setInitialCart] = useState([]);
    let price = currentOrder.reduce((acc, elem) => acc + (elem.price * elem.amount), 0);
    useEffect(() => {
        const cookieCart = Cookies.get('cart');
        setInitialCart(cookieCart);
    }, []);

    // functions
    const handleDeleteOrder = (id) => {
        const newOrderList = currentOrder.filter(product => product.id !== id);
        dispatch(setProducts(newOrderList))
        price = currentOrder.reduce((acc, elem) => acc + (elem.price * elem.amount), 0);
        price = Math.round(price);
        // Cookies.set('cart', currentOrder);
    }

    // page
    return (
        <div>
            {bar && <div className="bg-amber-300 h-44 flex gap-5 items-center">
                <div>
                    <div className="text-5xl p-8">In order:</div>
                    {takeout && <div className="px-8 text-center">Takeout</div>}
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <div className="text-yellow-800 font-bold">Price: {round(price, 2)}$</div>
                    <Link to="/" className="text-center" onClick={() => {
                        setTakeout(false)
                        dispatch(setBar(false))
                        dispatch(setProducts([]))
                        dispatch(setCurrentData(null))
                    }}>
                        <button className="rounded-lg bg-blue-500 text-white font-bold p-1 hover:bg-blue-600">Start
                            again
                        </button>
                    </Link>
                </div>
                <div>
                    <ul className="flex gap-10 items-center justify-center">
                        {currentOrder.map(product => (
                            <li key={product.id}
                                className="flex flex-col bg-amber-500 items-center justify-center p-4 rounded-lg">
                                <div className="max-w-xs b font-black">{product.name} {product.amount}x</div>
                                <div>{product.price * product.amount}$</div>
                                <button onClick={() => handleDeleteOrder(product.id)}
                                        className="rounded-lg bg-red-500 text-white font-bold p-1 hover:bg-red-600">Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
            {!bar && <div className="text-center p-10">
                <div className="text-6xl font-black text-red-900">MacDonald's</div>
            </div>}
        </div>
    )
}
export default Bar;