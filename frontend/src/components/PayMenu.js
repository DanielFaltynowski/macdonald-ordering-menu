import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setProducts} from "../redux/currentOrder";
import {useFormik} from "formik";
import {round} from "lodash";

const PayMenu = () => {
    const formik = useFormik({
        initialValues: {
            code: ''
        }
    })
    const dispatch = useDispatch()
    // variables
    const currentOrder = useSelector((state) => state.currentOrder.order)
    let price = currentOrder.reduce((acc, elem) => acc + (elem.price * elem.amount), 0);
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
                                        <div className="p-2 font-black">{product.price * product.amount}$</div>
                                    </div>
                                </div>
                            ))}
                            <div className="font-black">Total: {round(price, 2)}$</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="font-black p-5">Insert BLIK code</div>
            </div>
            <div className="text-center mb-24 flex flex-col gap-32">
                <div>
                    <form className="flex gap-10 items-center">
                        <input required id="code" name="code" type="text" value={formik.values.code} onChange={formik.handleChange} className="w-40 h-6 border-3 border-blue-600 rounded-xl p-4 bg-blue-100"/>
                        <Link to="/getstarted/payfor/ordercode" className="">
                            <button className="p-7 rounded-3xl bg-green-600 text-white font-bold text-4xl hover:bg-green-300 hover:text-green-800 disabled:bg-gray-300 disabled:text-gray-800" disabled={formik.values.code.length !== 10}>Pay</button>
                        </Link>
                    </form>

                </div>
                <div>
                    <Link to="/" className="p-7 rounded-3xl bg-red-600 text-white font-bold text-4xl hover:bg-red-300 hover:text-red-800" onClick={() => dispatch(setProducts([]))}>
                        <button>Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default PayMenu;