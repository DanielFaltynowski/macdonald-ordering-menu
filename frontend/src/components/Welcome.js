import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <div className="w-3/4 flex justify-evenly m-10">
                        <Link to="/getstarted">
                            <div className="w-96 h-28 border border-8 border-solid rounded-3xl flex justify-center items-center hover:bg-gray-50">
                                <div className="text-gray-500 font-black text-6xl">Start</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>Welcome!!!</div>
            </div>
        </div>
    )
}
export default Welcome;