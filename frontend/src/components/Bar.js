import {useState} from "react";

const Bar = () => {
    const [orderList, setOrderList] = useState([{id: 1, name: "burger", price: 3.99, amount: 1}, {id: 2, name: "cheseburger", price: 4.99, amount: 2}, {id: 3, name: "coca-cola", price: 1.49, amount: 1}]);
    let price = orderList.reduce((acc, elem) => acc + (elem.price * elem.amount), 0)
    // const [countPrice, setCountPrice] = useState(0);
    const handleDeleteOrder = (id) => {
        const newOrderList = orderList.filter(product => product.id !== id);
        setOrderList(newOrderList);
        price = orderList.reduce((acc, elem) => acc + (elem.price * elem.amount), 0)
        price = Math.round(price)
        // setCountPrice(newPrice)
    }
    return (
        <div className="bg-amber-300 h-44 flex gap-5 items-center ">
            <div className="text-5xl p-8">In order:</div>
            <div className="text-white font-bold">Price: {price}$</div>
            <div>
                <ul className="flex gap-10 items-center justify-center">
                    {orderList.map(product => (
                        <li key={product.id} className="flex flex-col bg-amber-500 items-center justify-center p-4 rounded-lg">
                            <div className="max-w-xs b">{product.name}   {product.amount}x</div>
                            <div>{product.price * product.amount}$</div>
                            <button onClick={() => handleDeleteOrder(product.id)} className="">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Bar;