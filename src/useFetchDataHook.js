import { useEffect, useState } from "react";

const useFetchDataHook = (url) => {
    const [data, setData] = useState(null);
    const [fetchIsLoading, setfetchIsLoading] = useState(true);
    const [errorMessageLog, setErrorMessageLog] = useState(null)


    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal : abortController.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not Fetch Data from the Request, Please check your Internet Connection or Proper Urls Endpoints and Try again!.........")
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setfetchIsLoading(false)
                setErrorMessageLog(null)
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Data Fetch Aborted!')
                } else {
                    setfetchIsLoading(false)
                    setErrorMessageLog(err.message)
                }
            })
        }, 10);

        return () => abortController.abort();

    }, [url])
    return {data, fetchIsLoading, errorMessageLog }
}


export default useFetchDataHook;