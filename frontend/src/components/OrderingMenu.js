import {useState} from "react";
import ProductsList from "./ProductsList";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setBar} from "../redux/currentOrder";
import useFetch from "../customHooks/useFetch";

const OrderingMenu = () => {
    const order = useSelector((state) => state.currentOrder.order)
    const dispatch = useDispatch();
    const [burgers, setBurgers] = useState([])
    const [sandwiches, setSandwiches] = useState([{id: 1, name: "BigMac", price: 3.99, desc: "simple burger, thats all", vege: false}, {id: 2, name: "McDouble", price: 4.99, desc: "simple burger, thats all", vege: false}]);
    const [nuggets, setNuggets] = useState([{id: 1, name: "BigMac", price: 3.99, desc: "simple burger, thats all", vege: false}, {id: 2, name: "McDouble", price: 4.99, desc: "simple burger, thats all", vege: false}]);
    const [fands, setFands] = useState([{id: 1, name: "BigMac", price: 3.99, desc: "simple burger, thats all", vege: false}, {id: 2, name: "McDouble", price: 4.99, desc: "simple burger, thats all", vege: false}]);
    const [beverages, setBeverages] = useState([])
    const [coffees, setCoffees] = useState([{id: 1, name: "BigMac", price: 3.99, desc: "simple burger, thats all", vege: false}, {id: 2, name: "McDouble", price: 4.99, desc: "simple burger, thats all", vege: false}]);
    const condition = burgers === null || sandwiches === null || nuggets === null || fands === null || beverages === null || coffees === null
    const template = (
        <div className="flex flex-col gap-10 pt-24">
            <div>
                <Link to="/getstarted/payfor" onClick={() => dispatch(setBar(false))}>
                    <button className="bg-blue-700 text-white font-black text-5xl p-5 rounded-2xl disabled:bg-gray-400 disabled:text-gray-600 hover:bg-blue-300 hover:text-blue-900" disabled={order.length === 0}>Accept & Pay</button>
                </Link>
            </div>
            <ProductsList groupOf={burgers} header="BURGERS"></ProductsList>
            <ProductsList groupOf={sandwiches} header="SANDWICHES"></ProductsList>
            <ProductsList groupOf={nuggets} header="NUGGETS"></ProductsList>
            <ProductsList groupOf={fands} header="FRIES & SIDES"></ProductsList>
            <ProductsList groupOf={beverages} header="BEVERAGES"></ProductsList>
            <ProductsList groupOf={coffees} header="COFFEES"></ProductsList>
        </div>
    )
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4">
                {condition && (
                    <div className="flex flex-col gap-10 pt-24">
                        <div className="text-center">Loading...</div>
                    </div>
                )}
                {(!condition) && template}
            </div>
        </div>
    )
}
export default OrderingMenu;