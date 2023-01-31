import {useState} from "react";
import ProductsList from "./ProductsList";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setBar} from "../redux/currentOrder";

const OrderingMenu = () => {
    const order = useSelector((state) => state.currentOrder.order)
    const dispatch = useDispatch();
    const data = useSelector((state) => state.currentOrder.data)
    const [burgers, setBurgers] = useState(data.products.filter(prod => prod.type === "burger"))
    const [sandwiches, setSandwiches] = useState(data.products.filter(prod => prod.type === "sandwich"));
    const [nuggets, setNuggets] = useState(data.products.filter(prod => prod.type === "nuggets"));
    const [fands, setFands] = useState(data.products.filter(prod => prod.type === "fands"));
    const [beverages, setBeverages] = useState(data.products.filter(prod => prod.type === "beverage"))
    const [coffees, setCoffees] = useState(data.products.filter(prod => prod.type === "coffee"));
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
                {!data && <div>Error occured</div>}
            </div>
        </div>
    )
}
export default OrderingMenu;