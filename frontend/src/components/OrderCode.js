import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setProducts} from "../redux/currentOrder";

const OrderCode = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 m-12 mb-24">
                <div>some code</div>
                <Link to="/" onClick={() => dispatch(setProducts([]))}>
                    <button>Back to main menu</button>
                </Link>
            </div>
        </div>
    )
}
export default OrderCode;