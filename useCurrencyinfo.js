//  function hello (){
//     return []
//  }

/* yeh upar waali cheez bhi ak hook hai becuse it si fuction and it is 
return a array  */

/* baaki alag alag hook ka kaam alag hoota hai in react 
---> to optimize the uI  */

import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setdata] =useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // yeh fetch hamara  api call karega 
        .then((res)=>res.json())
        .then((res)=> setdata(res[currency]))
        // hamne yaha pe res ki value ko setdata meh iss lieye rakha hai because yeh value change hogi toh UI meh chnag nahi hoga iss liye useState use kiya because jaise hi data ki value change huii puree ui meh uss data ki value cahnge hogii 

    },[currency]);
    return data;
}

// export whole fucntion 
export default useCurrencyInfo;

// baaki coustum hook meh basic structure yeh hi hota hai
// aise hi bante hai baaki hooks bhi 