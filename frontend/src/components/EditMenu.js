import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import EditBar from "./EditBar";

const EditMenu = () => {

    // variables
    const currentOrder = useSelector((state) => state.currentOrder.currentProduct);
    const [price, setPrice] = useState(currentOrder.price);
    const [amount, setAmount] = useState(1);

    // functions
    const temp = {
        name: "Product",
        price: 2.99,
        vege: false,
        desc: "some description",
        type: "burgers",
        pickles: 0,
        onion: 0,
        becon: 0,
        lettuce: 0,
        bigbun: 0,
        salt: 0,
        pepper: 0,
        egg: 0,
        butter: 0,
        tomato: 0,
        ice: 0,
        nocofeine: 0,
        sugar: 0,

    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 m-24">
                <div className="flex justify-around">
                    <div className="shadow-md shadow-gray-300 p-10 rounded-2xl text-center flex justify-between items-center gap-5">
                        <div>
                            <div className="rounded-full w-64 h-64 bg-gray-400">

                            </div>
                        </div>
                        <div>
                            <div className="text-6xl font-black p-5">{currentOrder.name}</div>
                            <div className="max-w-xs">{currentOrder.desc}</div>
                            <div className="p-2 font-black">{price}$</div>
                            {currentOrder.vege && <div className="text-green-400 p-5">Vegan Safe</div>}
                            <Link to="/getstarted/menu">
                                <button className="p-4 bg-red-500 text-white font-black text-2xl rounded-3xl">Back</button>
                            </Link>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-300 p-10 rounded-2xl text-center">
                        <div className="text-4xl font-black p-5">Edit Product</div>
                        <div>
                            <EditBar price={price} setPrice={setPrice}></EditBar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditMenu;