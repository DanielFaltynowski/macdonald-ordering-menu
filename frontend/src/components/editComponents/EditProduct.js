import {useFormik} from "formik";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const EditProduct = () => {
    const [updated, setUpdated] = useState(false)
    const formik2 = useFormik({
        initialValues: {
            methodType: 'Add',
            productId: '',
            productName: '',
            productPrice: '',
            productType: '',
            productVege: '',
            productDesc: ''
        },
        onSubmit: values => {
            const data = JSON.stringify({
                id: values.productId,
                name: values.productName,
                price: values.productPrice,
                vege: values.productVege,
                desc: values.productDesc
            })
            axios.put(`http://127.0.0.1:5000/products/${values.productId}`,data , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => console.log('product added')).then(() => {
                setUpdated(true)
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
                    <div className="text-6xl font-black mb-10 mt-10">Edit</div>
                    <form className="flex flex-col justify-center gap-3" onSubmit={formik2.handleSubmit}>
                        <label>Product Id</label>
                        <input name="productId" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1" value={formik2.values.productId}/>
                        <div>{formik2.values.productId}</div>

                        <label>New Product Name</label>
                        <input name="productName" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1" value={formik2.values.productName}/>
                        <div>{formik2.values.productName}</div>

                        <label>New Product Price</label>
                        <input name="productPrice" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1" value={formik2.values.productPrice}/>
                        <div>{formik2.values.productPrice}</div>

                        <label>Is new Product vege?</label>
                        <select className="border-3 rounded-md bg-gray-200 max-w-sm p-2" name="productVege" onChange={formik2.handleChange} value={formik2.values.productVege}>
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        <div>{formik2.values.productVege}</div>

                        <div>New Product Description</div>
                        <div className="mb-3">
                            <textarea className="border border-gray-300 border-3 rounded-md max-w-sm p-1" name="productDesc" cols="30" rows="10" value={formik2.values.productDesc} onChange={formik2.handleChange}></textarea>
                        </div>
                        <div>{formik2.values.productDesc}</div>
                        <button className="mt-3 mb-24 font-black text-white w-24 bg-purple-700 h-8 p-5 rounded-2xl flex justify-center items-center hover:bg-purple-300 hover:text-purple-800">Make</button>
                    </form>
                    {updated && <div className="mt-2 mb-24">Added</div>}
                </div>
            </div>
        </div>
    )
}
export default EditProduct;