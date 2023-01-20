import {useState} from "react";
import {Link} from "react-router-dom";

const Bar = ({order, setOrder, takeout, setTakeout}) => {
    let price = order.reduce((acc, elem) => acc + (elem.price * elem.amount), 0);
    const handleDeleteOrder = (id) => {
        const newOrderList = order.filter(product => product.id !== id);
        setOrder(newOrderList);
        price = order.reduce((acc, elem) => acc + (elem.price * elem.amount), 0);
        price = Math.round(price);
    }
    return (
        <div className="bg-amber-300 h-44 flex gap-5 items-center ">
            <div>
                <div className="text-5xl p-8">In order:</div>
                {takeout && <div className="px-8 text-center">Takeout</div>}
            </div>
            <div className="flex flex-col justify-center gap-2">
                <div className="text-white font-bold">Price: {price}$</div>
                <Link to="/" className="text-center" onClick={() => {
                    setTakeout(false)
                    setOrder([])
                }}>
                    <button className="rounded-lg bg-blue-500 text-white font-bold p-1 hover:bg-blue-600">Start again</button>
                </Link>
            </div>
            <div>
                <ul className="flex gap-10 items-center justify-center">
                    {order.map(product => (
                        <li key={product.id} className="flex flex-col bg-amber-500 items-center justify-center p-4 rounded-lg">
                            <div className="max-w-xs b">{product.name}   {product.amount}x</div>
                            <div>{product.price * product.amount}$</div>
                            <button onClick={() => handleDeleteOrder(product.id)} className="rounded-lg bg-red-500 text-white font-bold p-1 hover:bg-red-600">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Bar;