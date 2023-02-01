import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import axios from "axios";

const ChangeLogin = () => {
    const [changed, setChanged] = useState(false)
    const [currentPassword, setCurrentPassword] = useState(null)
    const formik2 = useFormik({
        initialValues: {
            id: '',
            login: '',
            oldPassword: '',
            newPassword: ''
        },
        onSubmit: values => {
            console.log(formik2.values.oldPassword, currentPassword)
            if (formik2.values.oldPassword === currentPassword) {
                const data = JSON.stringify({
                    login: values.login,
                    password: values.newPassword
                })
                axios.patch('http://127.0.0.1:5000/admin', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(() => console.log('product added')).then(() => {
                    setChanged(true)
                }).catch((error) => console.log(error))
            }
        }
    })
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/admin')
            .then(response => {
                console.log(response);
                const res = response.data.admin[0]
                setCurrentPassword(res.password)
            })
            .catch(error => {
                console.log(error);
            });
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
                    <div className="text-6xl font-black mb-10 mt-10">Change</div>
                    <form className="flex flex-col justify-center gap-3" onSubmit={formik2.handleSubmit}>
                        <label>Old password</label>
                        <input name="oldPassword" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1" value={formik2.values.oldPassword}/>
                        <div>{formik2.values.oldPassword}</div>

                        <label>New Login</label>
                        <input name="login" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1" value={formik2.values.login}/>
                        <div>{formik2.values.login}</div>

                        <label>New password</label>
                        <input name="newPassword" onChange={formik2.handleChange} type="text" className="border-3 rounded-md bg-gray-200 max-w-sm p-1" value={formik2.values.newPassword}/>
                        <div>{formik2.values.newPassword}</div>
                        <button className="mt-3 mb-24 font-black text-white w-24 bg-purple-700 h-8 p-5 rounded-2xl flex justify-center items-center hover:bg-purple-300 hover:text-purple-800">Update</button>
                    </form>
                    {changed && <div className="mt-2 mb-24">Changed</div>}
                </div>
            </div>
        </div>
    )
}
export default ChangeLogin;