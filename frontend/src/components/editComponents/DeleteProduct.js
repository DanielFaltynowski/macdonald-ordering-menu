import {useFormik} from "formik";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";


const DeleteProduct = () => {
    const [deleted, setDeleted] = useState(false)
    const formik2 = useFormik({
        initialValues: {
            methodType: 'Delete',
            productId: ''
        },
        onSubmit: values => {
            const data = {
                id: values.productId
            }
            axios.delete(`http://127.0.0.1:5000/products/${values.productId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => console.log('product added')).then(() => {
                setDeleted(true)
            }).catch((error) => console.log(error))
        }
    })
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-3/4">
                    <Link to="/">
                        <div className="mb-10 text-white w-48 bg-red-500 h-16 rounded-3xl flex justify-center items-center hover:bg-red-400 hover:text-red-800">
                            <div className="font-black text-xl">Back to menu</div>
                        </div>
                    </Link>
                    <div className="text-6xl font-black mb-10 mt-10">Delete</div>
                    <form className="flex flex-col justify-center gap-3" onSubmit={formik2.handleSubmit}>
                        <label>Product Id</label>
                        <input name="productId" onChange={formik2.handleChange} value={formik2.values.productId} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productId}</div>
                        <button className="mt-3 mb-12 font-black text-white w-24 bg-purple-700 h-8 p-5 rounded-2xl flex justify-center items-center hover:bg-purple-300 hover:text-purple-800 disabled:bg-gray-400 disabled:text-gray-800" disabled={deleted}>Delete</button>
                    </form>
                    {deleted && <div className="mt-2 mb-24">Deleted</div>}
                </div>
            </div>
        </div>
    )
}
export default DeleteProduct;