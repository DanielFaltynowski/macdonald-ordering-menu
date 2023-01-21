import {useDispatch, useSelector} from "react-redux";
import {setCurrentProducts} from "../redux/currentOrder";

const EditBar = ({price, setPrice}) => {

    //variables
    const prod = useSelector((state) => state.currentOrder.currentProduct);
    const dispatch = useDispatch();

    //functions

    return (
        <div className="rounded-2xl border-4 border-solid">
            {(prod.type === "burger") && (
                <div className="flex items-center justify-evenly p-3">
                    <div className="font-bold">Pickle Slides</div>
                    <div>
                        <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                            const newObj = {...prod}
                            if (newObj.pickles > 0 && newObj.pickles < 2) {
                                newObj.pickles = newObj.pickles + 1
                                setPrice(price + 0.3)
                                dispatch(setCurrentProducts(newObj))
                            }
                            if (newObj.pickles === 0) {
                                newObj.pickles = newObj.pickles + 1
                                setPrice(price + 0.3)
                                dispatch(setCurrentProducts(newObj))
                            }
                        }} disabled={prod.pickles === 2}>+</button>
                        <div className="font-black">{prod.pickles}</div>
                        <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                            const newObj = {...prod}
                            if (newObj.pickles > 0 && newObj.pickles < 2) {
                                newObj.pickles = newObj.pickles - 1
                                setPrice(price - 0.3)
                                dispatch(setCurrentProducts(newObj))
                            }
                            if (newObj.pickles === 2) {
                                newObj.pickles = newObj.pickles - 1
                                setPrice(price - 0.3)
                                dispatch(setCurrentProducts(newObj))
                            }
                        }} disabled={prod.pickles === 0}>-</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default EditBar;