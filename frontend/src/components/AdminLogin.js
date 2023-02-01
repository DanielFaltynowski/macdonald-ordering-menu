import {Link} from "react-router-dom";
import {useFormik} from "formik";
import axios from "axios";
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
            {editBar && <div className="mb-16">
                <div>
                    <div className="text-2xl font-black text-center m-10">What do you want to do?</div>
                </div>
                <Link to="/adminmode/add">
                    <button className="bg-green-500 text-white text-2xl p-3 font-black rounded-2xl hover:bg-green-300 hover:text-green-800 mr-10">Add new product</button>
                </Link>
                <Link to="/adminmode/edit">
                    <button className="bg-blue-500 text-white text-2xl p-3 font-black rounded-2xl hover:bg-blue-300 hover:text-blue-800">Edit product</button>
                </Link>
                <Link to="/adminmode/delete">
                    <button className="bg-red-500 text-white text-2xl p-3 font-black rounded-2xl hover:bg-red-300 hover:text-red-800 ml-10">Delete product</button>
                </Link>
                <Link to="/adminmode/change">
                    <button className="bg-pink-500 text-white text-2xl p-3 font-black rounded-2xl hover:bg-pink-300 hover:text-pink-800 ml-10">Change login and password</button>
                </Link>
            </div>}
        </div>
    );
}
export default AdminLogin;