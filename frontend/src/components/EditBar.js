import {useDispatch, useSelector} from "react-redux";
import {setCurrentProducts} from "../redux/currentOrder";
import {round} from "lodash";

const EditBar = ({price, setPrice, addPrice}) => {

    //variables
    const prod = useSelector((state) => state.currentOrder.currentProduct);
    const dispatch = useDispatch();

    //functions

    return (
        <div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Pickle Slides</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.pickles > 0 && newObj.pickles < 2) {
                                    newObj.pickles = newObj.pickles + 1
                                    setPrice(round(price + 0.3, 2))
                                    addPrice += 0.3
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.pickles === 0) {
                                    newObj.pickles = newObj.pickles + 1
                                    setPrice(round(price + 0.3, 2))
                                    addPrice += 0.3
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.pickles === 2}>+</button>
                            <div className="font-black">{prod.pickles}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.pickles > 0 && newObj.pickles < 2) {
                                    newObj.pickles = newObj.pickles - 1
                                    setPrice(round(price - 0.3, 2))
                                    addPrice -= 0.3
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.pickles === 2) {
                                    newObj.pickles = newObj.pickles - 1
                                    setPrice(round(price - 0.3, 2))
                                    addPrice -= 0.3
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.pickles === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Onion</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.onion > 0 && newObj.onion < 2) {
                                    newObj.onion = newObj.onion + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.onion === 0) {
                                    newObj.onion = newObj.onion + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.onion === 2}>+</button>
                            <div className="font-black">{prod.onion}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.onion > 0 && newObj.onion < 2) {
                                    newObj.onion = newObj.onion - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.onion === 2) {
                                    newObj.onion = newObj.onion - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.onion === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Becon</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.becon > 0 && newObj.becon < 2) {
                                    newObj.becon = newObj.becon + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.becon === 0) {
                                    newObj.becon = newObj.becon + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.becon === 2}>+</button>
                            <div className="font-black">{prod.becon}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.becon > 0 && newObj.becon < 2) {
                                    newObj.becon = newObj.becon - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.becon === 2) {
                                    newObj.becon = newObj.becon - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.becon === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Lettuce</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.lettuce > 0 && newObj.lettuce < 2) {
                                    newObj.lettuce = newObj.lettuce + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.lettuce === 0) {
                                    newObj.lettuce = newObj.lettuce + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.lettuce === 2}>+</button>
                            <div className="font-black">{prod.lettuce}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.lettuce > 0 && newObj.lettuce < 2) {
                                    newObj.lettuce = newObj.lettuce - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.lettuce === 2) {
                                    newObj.lettuce = newObj.lettuce - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.lettuce === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Big Bun</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.bigbun > 0 && newObj.bigbun < 2) {
                                    newObj.bigbun = newObj.bigbun + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.bigbun === 0) {
                                    newObj.bigbun = newObj.bigbun + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.bigbun === 2}>+</button>
                            <div className="font-black">{prod.bigbun}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.bigbun > 0 && newObj.bigbun < 2) {
                                    newObj.bigbun = newObj.bigbun - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.bigbun === 2) {
                                    newObj.bigbun = newObj.bigbun - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.bigbun === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Egg</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.egg > 0 && newObj.egg < 2) {
                                    newObj.egg = newObj.egg + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.egg === 0) {
                                    newObj.egg = newObj.egg + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.egg === 2}>+</button>
                            <div className="font-black">{prod.egg}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.egg > 0 && newObj.egg < 2) {
                                    newObj.egg = newObj.egg - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.egg === 2) {
                                    newObj.egg = newObj.egg - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.egg === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich" || prod.type === "nuggets" || prod.name === "Fries") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Salt</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.salt > 0 && newObj.salt < 2) {
                                    newObj.salt = newObj.salt + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.salt === 0) {
                                    newObj.salt = newObj.salt + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.salt === 2}>+</button>
                            <div className="font-black">{prod.salt}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.salt > 0 && newObj.salt < 2) {
                                    newObj.salt = newObj.salt - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.salt === 2) {
                                    newObj.salt = newObj.salt - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.salt === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "burger" || prod.type === "sandwich" || prod.type === "nuggets" || prod.name === "Fries") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Pepper</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.pepper > 0 && newObj.pepper < 2) {
                                    newObj.pepper = newObj.pepper + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.pepper === 0) {
                                    newObj.pepper = newObj.pepper + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.pepper === 2}>+</button>
                            <div className="font-black">{prod.pepper}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.pepper > 0 && newObj.pepper < 2) {
                                    newObj.pepper = newObj.pepper - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.pepper === 2) {
                                    newObj.pepper = newObj.pepper - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.pepper === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "beverage") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Ice</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.ice > 0 && newObj.ice < 2) {
                                    newObj.ice = newObj.ice + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.ice === 0) {
                                    newObj.ice = newObj.ice + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.ice === 2}>+</button>
                            <div className="font-black">{prod.ice}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.ice > 0 && newObj.ice < 2) {
                                    newObj.ice = newObj.ice - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.ice === 2) {
                                    newObj.ice = newObj.ice - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.ice === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "coffee") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">No-Cofeine</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.nocofeine > 0 && newObj.nocofeine < 2) {
                                    newObj.nocofeine = newObj.nocofeine + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.nocofeine === 0) {
                                    newObj.nocofeine = newObj.nocofeine + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.nocofeine === 2}>+</button>
                            <div className="font-black">{prod.nocofeine}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.nocofeine > 0 && newObj.nocofeine < 2) {
                                    newObj.nocofeine = newObj.nocofeine - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.nocofeine === 2) {
                                    newObj.nocofeine = newObj.nocofeine - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.nocofeine === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                {(prod.type === "coffee") && (
                    <div className="flex items-center justify-between p-3 rounded-2xl border-4 border-solid mb-3">
                        <div className="font-bold p-5">Sugar</div>
                        <div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-lime-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.sugar > 0 && newObj.sugar < 2) {
                                    newObj.sugar = newObj.sugar + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.sugar === 0) {
                                    newObj.sugar = newObj.sugar + 1
                                    setPrice(round(price + 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.sugar === 2}>+</button>
                            <div className="font-black">{prod.sugar}</div>
                            <button className="w-8 h-8 p-0.25 rounded-full bg-red-600 text-white font-black disabled:bg-gray-300" onClick={() => {
                                const newObj = {...prod}
                                if (newObj.sugar > 0 && newObj.sugar < 2) {
                                    newObj.sugar = newObj.sugar - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                                if (newObj.sugar === 2) {
                                    newObj.sugar = newObj.sugar - 1
                                    setPrice(round(price - 0.3, 2))
                                    dispatch(setCurrentProducts(newObj))
                                }
                            }} disabled={prod.sugar === 0}>-</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default EditBar;