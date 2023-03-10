import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import EditBar from "./EditBar";
import {round} from "lodash";
import {setCurrentProducts, setProducts} from "../redux/currentOrder";
import { v4 as uuidv4 } from 'uuid';

const EditMenu = () => {

    // variables
    const currentOrder = useSelector((state) => state.currentOrder.currentProduct);
    const order = useSelector((state) => state.currentOrder.order);
    const addPrice = currentOrder.price
    const cost = currentOrder.price
    const [price, setPrice] = useState(currentOrder.price);
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();


    // functions
    const addToOrder = () => {
        const createTemplate = {
            id: uuidv4(),
            name: currentOrder.name,
            price: addPrice,
            amount: amount
        }
        dispatch(setProducts([...order, createTemplate]))
        dispatch(setCurrentProducts(null))
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 m-24">
                <div className="flex justify-around">
                    <div className="shadow-md shadow-gray-300 p-10 rounded-2xl text-center flex justify-between items-center">
                        <div>
                            <div className="rounded-full w-64 h-64 bg-gray-400">

                            </div>
                        </div>
                        <div className="">
                            <div className="text-6xl font-black p-5">{currentOrder.name}</div>
                            <div className="max-w-xs">{currentOrder.desc}</div>
                            <div className="p-2 font-black">{price}$</div>
                            <div className="">
                                <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                    if (amount > 1 && amount < 5) {
                                        setAmount(amount + 1)
                                        setPrice(round(price + cost, 2))
                                    }
                                    if (amount === 1) {
                                        setAmount(amount + 1)
                                        setPrice(round(price + cost, 2))
                                    }
                                }} disabled={amount === 5}>+</button>
                                <div className="p-3 font-bold"> Quantity: {amount}</div>
                                <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                    if (amount > 1 && amount < 5) {
                                        setAmount(amount - 1)
                                        setPrice(round(price - cost, 2))
                                    }
                                    if (amount === 5) {
                                        setAmount(amount - 1)
                                        setPrice(round(price - cost, 2))
                                    }
                                }} disabled={amount === 1}>-</button>
                            </div>
                            {currentOrder.vege && <div className="text-green-400 p-5">Vegan Safe</div>}
                            <Link to="/getstarted/menu" onClick={addToOrder}>
                                <button className="p-4 bg-green-500 text-white font-black text-2xl rounded-3xl mr-5 hover:bg-green-600">Add</button>
                            </Link>
                            <Link to="/getstarted/menu">
                                <button className="p-4 bg-red-500 text-white font-black text-2xl rounded-3xl hover:bg-red-600">Back</button>
                            </Link>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-300 p-10 rounded-2xl text-center">
                        <div className="text-4xl font-black p-5">Edit Product</div>
                        <div>
                            <EditBar price={price} setPrice={setPrice} addPrice={addPrice}></EditBar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditMenu;