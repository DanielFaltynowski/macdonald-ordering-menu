import {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {setCurrentData} from "../redux/currentOrder";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(error.message);
                }
            })
        return () => abortCont.abort();
    }, [url])
    dispatch(setCurrentData(data))
    return {data, isPending, error}
}

export default useFetch;