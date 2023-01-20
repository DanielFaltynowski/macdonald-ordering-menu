import {useState} from "react";
import {Link} from "react-router-dom";

const ProductsList = ({groupOf, header}) => {

    return (
        <div>
            <div className="rounded-3xl p-10 shadow-md shadow-gray-400 flex-col items-center justify-center">
                <div className="mb-10 text-center p-6 font-black text-pink-700 text-5xl">{header}</div>
                {groupOf.map(product => (
                    <div className="border-4 border-solid border-gray-300 mb-5 p-5 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div className="basis-2/12">
                                <div className="w-32 h-32 rounded-full bg-gray-400"></div>
                            </div>
                            <div className="basis-9/12">
                                <div className="font-black text-4xl">{product.name}</div>
                                <div className="desc">{product.desc}</div>
                            </div>
                            <div className="basis-1/12">{product.price}$</div>
                        </div>
                        <div className="flex justify-end items-center gap-10">
                            {(product.vege) ? <div className="text-green-400">Vegan Safe</div> : null}
                            <Link to="/getstarted/menu/add">
                                <button className="bg-blue-400 text-white font-black text-3xl p-4 rounded-xl hover:bg-blue-600">Add</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductsList;