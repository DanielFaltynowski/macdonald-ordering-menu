import {useFormik} from "formik";
import {Link} from "react-router-dom";

const EditProduct = () => {
    const formik2 = useFormik({
        initialValues: {
            methodType: 'Add',
            productId: '',
            productName: '',
            productPrice: '',
            productType: '',
            productVege: '',
            productDesc: ''
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
                    <form className="flex flex-col justify-center gap-3">
                        <label>Product Id</label>
                        <input name="productId" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productId}</div>

                        <label>Product Name</label>
                        <input name="productName" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productName}</div>

                        <label>Product Price</label>
                        <input name="productPrice" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productPrice}</div>

                        <label>Product Type</label>
                        <input name="productType" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productType}</div>

                        <label>Product is vege?</label>
                        <select className="border-3 rounded-md bg-gray-200 max-w-sm p-2" name="productVege" onChange={formik2.handleChange} value={formik2.values.productVege}>
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                        <div>{formik2.values.productVege}</div>

                        <div>Product Description</div>
                        <div className="mb-3">
                            <textarea className="border border-gray-300 border-3 rounded-md max-w-sm p-1" name="productDesc" cols="30" rows="10" value={formik2.values.productDesc} onChange={formik2.handleChange}></textarea>
                        </div>
                        <div>{formik2.values.productDesc}</div>
                        <button onSubmit={formik2.handleSubmit} className="mt-3 mb-24 font-black text-white w-24 bg-purple-700 h-8 p-5 rounded-2xl flex justify-center items-center hover:bg-purple-300 hover:text-purple-800">Make</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditProduct;