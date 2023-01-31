import {useEffect, useState} from "react";
import ProductsList from "./ProductsList";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setBar, setCurrentData} from "../redux/currentOrder";
import axios from "axios";
import {useFormik} from "formik";

const OrderingMenu = () => {
    const order = useSelector((state) => state.currentOrder.order)
    const dispatch = useDispatch();
    const data = useSelector((state) => state.currentOrder.data)
    const [burgers, setBurgers] = useState([])
    const [sandwiches, setSandwiches] = useState([]);
    const [nuggets, setNuggets] = useState([]);
    const [fands, setFands] = useState([]);
    const [beverages, setBeverages] = useState([])
    const [coffees, setCoffees] = useState([]);
    const [condition, setCondition] = useState(true)
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/products')
            .then(res => {
                dispatch(setCurrentData(res.data))
                return res.data
            })
            .then((gotData) => {
                setBurgers(gotData.products.filter(prod => prod.type === "burger"))
                setSandwiches(gotData.products.filter(prod => prod.type === "sandwich"))
                setNuggets(gotData.products.filter(prod => prod.type === "nuggets"))
                setFands(gotData.products.filter(prod => prod.type === "fands"))
                setBeverages(gotData.products.filter(prod => prod.type === "beverage"))
                setCoffees(gotData.products.filter(prod => prod.type === "coffee"))
            })
            .then(() => {
                setCondition(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    const template = (
        <div className="flex flex-col gap-10 pt-24">
            <ProductsList groupOf={burgers} header="BURGERS"></ProductsList>
            <ProductsList groupOf={sandwiches} header="SANDWICHES"></ProductsList>
            <ProductsList groupOf={nuggets} header="NUGGETS"></ProductsList>
            <ProductsList groupOf={fands} header="FRIES & SIDES"></ProductsList>
            <ProductsList groupOf={beverages} header="BEVERAGES"></ProductsList>
            <ProductsList groupOf={coffees} header="COFFEES"></ProductsList>
        </div>
    )
    const formik = useFormik({
        initialValues: {
            pattern: ''
        },
        onSubmit: values => {
            if (values.pattern === '') {
                axios.get('http://127.0.0.1:5000/products')
                    .then(res => {
                        dispatch(setCurrentData(res.data))
                        return res.data
                    })
                    .then((gotData) => {
                        setBurgers(gotData.products.filter(prod => prod.type === "burger"))
                        setSandwiches(gotData.products.filter(prod => prod.type === "sandwich"))
                        setNuggets(gotData.products.filter(prod => prod.type === "nuggets"))
                        setFands(gotData.products.filter(prod => prod.type === "fands"))
                        setBeverages(gotData.products.filter(prod => prod.type === "beverage"))
                        setCoffees(gotData.products.filter(prod => prod.type === "coffee"))
                    })
                    .then(() => {
                        setCondition(false)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                axios.get(`http://127.0.0.1:5000/products/${values.pattern}`)
                    .then(res => {
                        dispatch(setCurrentData(res.data))
                        return res.data
                    })
                    .then(gotData => {
                        setBurgers(gotData.products.filter(prod => prod.type === "burger"))
                        setSandwiches(gotData.products.filter(prod => prod.type === "sandwich"))
                        setNuggets(gotData.products.filter(prod => prod.type === "nuggets"))
                        setFands(gotData.products.filter(prod => prod.type === "fands"))
                        setBeverages(gotData.products.filter(prod => prod.type === "beverage"))
                        setCoffees(gotData.products.filter(prod => prod.type === "coffee"))
                    })
                    .then(() => {
                        setCondition(false)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    })
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4">
                <div className="mt-16">
                    <div className="flex gap-5 items-center">
                        <Link to="/getstarted/payfor" onClick={() => dispatch(setBar(false))}>
                            <button className="bg-blue-700 text-white font-black text-5xl p-5 rounded-2xl disabled:bg-gray-400 disabled:text-gray-600 hover:bg-blue-300 hover:text-blue-900" disabled={order.length === 0}>Accept & Pay</button>
                        </Link>
                        <form onSubmit={formik.handleSubmit}>
                            <label className="font-black ml-16">Search:</label>
                            <input type="text" className="border border-blue-500 rounded-lg ml-5 mr-5 p-2"
                                   id="pattern"
                                   name="pattern"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.pattern}/>
                            <button className="bg-green-700 text-white font-black text-3xl p-3 rounded-2xl hover:bg-green-300 hover:text-green-900">Find</button>
                        </form>
                    </div>
                </div>

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