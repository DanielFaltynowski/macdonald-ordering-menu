import {Link} from "react-router-dom";
import {useFormik} from "formik";
import axios from "axios";
import Select from 'react-select'
import {setCurrentData} from "../redux/currentOrder";
import {useState} from "react";
import {value} from "lodash/seq";

const AdminLogin = () => {
    const options = [{value: 'option1', label: 'Add Product'}, {value: 'option2', label: 'Edit Product'}, {value: 'option3', label: 'Delete Product'}]
    const options2 = [{value: 'option4', label: 'True'}, {value: 'option5', label: 'False'}]
    const [editBar, setEditBar] = useState(false)
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: (values) => {
            let res;
                axios.get('http://127.0.0.1:5000/admin')
                .then(response => {
                    console.log(response);
                    res = response.data.admin[0]
                    if (res.login === values.login && res.password === values.password) {
                        setEditBar(true)
                    }
                    console.log(res, values)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    })
    const formik2 = useFormik({
        initialValues: {
            methodType: '',
            productId: '',
            productName: '',
            productPrice: '',
            productType: '',
            productVege: '',
            productDesc: ''
        },
        onSubmit: (values) => {
            console.log("hey")
            // const newProduct = {
            //     name: values.productName,
            //     price: values.productPrice,
            //     vege: values.productVege,
            //     desc: values.productDesc,
            //     type: values.productType,
            //     id: values.productId
            // }
            // axios.post('https://example.com/api/submit', newProduct)
            //     .then(response => {
            //         console.log(response.data);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        }
    })
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4">
                <div>
                    <Link to="/">
                        <div className="mb-10 text-white w-48 bg-red-500 h-16 rounded-3xl flex justify-center items-center hover:bg-red-400 hover:text-red-800">
                            <div className="font-black text-xl">Back to menu</div>
                        </div>
                    </Link>

                </div>
                <div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center gap-3">
                        <label htmlFor="login" className="font-black">Login</label>
                        <input
                            id="login"
                            name="login"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.login}
                            className="border-3 rounded-md bg-gray-200 max-w-sm p-1"
                        />
                        <label htmlFor="password" className="font-black">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="border-3 rounded-md bg-gray-200 max-w-sm p-1"
                        />
                        <button type="submit" className="mt-10 font-black text-white w-24 bg-orange-500 h-8 p-5 rounded-2xl flex justify-center items-center hover:bg-orange-300 hover:text-orange-800">Log in</button>
                    </form>
                </div>
            </div>
            {editBar && <div>
                <div>
                    <form className="flex flex-col justify-center gap-3">
                        <label>Method type</label>
                        <select className="border-3 rounded-md bg-gray-200 max-w-sm p-2" name="methodType" onChange={formik2.handleChange} value={formik2.values.methodType}>
                            <option value="option1">Add Product</option>
                            <option value="option2">Edit Product</option>
                            <option value="option3">Delete Product</option>
                        </select>
                        <div>{formik2.values.methodType}</div>

                        <label>Product Id</label>
                        <input name="productId" onChange={formik2.handleChange} type="number" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productId}</div>

                        <label>Product Name</label>
                        <input name="productName" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productName}</div>

                        <label>Product Price</label>
                        <input name="productPrice" onChange={formik2.handleChange} type="number" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productPrice}</div>

                        <label>Product Type</label>
                        <input name="productType" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1"/>
                        <div>{formik2.values.productType}</div>

                        <label>Product is vege?</label>
                        <select className="border-3 rounded-md bg-gray-200 max-w-sm p-2" name="productVege" onChange={formik2.handleChange} value={formik2.values.productVege}>
                            <option value="option1">True</option>
                            <option value="option2">False</option>
                        </select>
                        <div>{formik2.values.productVege}</div>

                        <div>Product Description</div>
                        <div className="mb-3">
                            <textarea className="border border-gray-300 border-3 rounded-md max-w-sm p-1" name="productDesc" cols="30" rows="10"></textarea>
                        </div>
                        <div>{formik2.values.productDesc}</div>
                        <button onSubmit={formik.handleSubmit} className="mt-3 mb-24 font-black text-white w-24 bg-purple-700 h-8 p-5 rounded-2xl flex justify-center items-center hover:bg-purple-300 hover:text-purple-800">Make</button>
                    </form>
                </div>
            </div>}
        </div>
    );
}
export default AdminLogin;