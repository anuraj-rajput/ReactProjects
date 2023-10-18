import { useEffect } from "react";
import { useState } from 'react';

function useCurrencyInfo(currency) {
    
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then(response => {            
             return response.json()
            })
            .then(res => {
                const ndata = res['rates']
                console.log(ndata)
                setData(ndata)
            
        })
    }, [currency]) 
    
    console.log(data);
    return data ;

}

export default useCurrencyInfo;