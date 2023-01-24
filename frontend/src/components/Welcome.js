import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBar} from "../redux/currentOrder";
import {sample} from "lodash";

const Welcome = () => {
    const dispatch = useDispatch();
    const headers = [
        "Only today, if you add some extras to your order, second ones will be for free!",
        "Smile is your the most valid weapon!",
        "We didn't forget about vegetarians!",
        "Nice to see you!",
        "The McDonald's golden arch logo is iconic throughout the world!"
    ]
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <div className="w-3/4 flex justify-evenly m-10">
                        <Link to="/getstarted" onClick={() => dispatch(setBar(true))}>
                            <div className="w-96 h-28 border border-8 border-solid rounded-3xl flex justify-center items-center hover:bg-gray-50">
                                <div className="text-gray-500 font-black text-6xl">Start</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div><div className="font-black text-gray-800 text-4xl">{sample(headers)}</div></div>
            </div>
        </div>
    )
}
export default Welcome;