import {useState} from "react";
import {useFormik} from "formik";
import {v4 as uuidv4} from 'uuid';
import axios from "axios";

const SendOpinion = () => {
    const [added, setAdded] = useState(false)
    const formik = useFormik({
        initialValues: {
            opinion: ''
        },
        onSubmit: values => {
            const data = JSON.stringify({
                id: uuidv4(),
                opinion: values.opinion
            })
            axios.post('http://127.0.0.1:5000/opinions', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => console.log('product added')).then(() => {
                setAdded(true)
            }).catch((error) => console.log(error))
        }
    })
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 m-12 mb-24">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-10">
                    <label className="text-3xl font-black">Write your opinion:</label>
                    <textarea className="border border-gray-300 border-3 rounded-md max-w-sm p-1" name="opinion" cols="30" rows="10" value={formik.values.opinion} onChange={formik.handleChange}></textarea>
                    <button className="mt-3 mb-12 font-black text-white w-24 bg-purple-700 h-8 p-5 rounded-2xl flex justify-center items-center hover:bg-purple-300 hover:text-purple-800 disabled:bg-gray-400 disabled:text-gray-800" disabled={added}>Send</button>
                </form>
                <div>{formik.values.opinion}</div>
                {added && <div>Added!</div>}
            </div>
        </div>
    )
}
export default SendOpinion;