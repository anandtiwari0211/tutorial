import React,{useEffect, useState} from "react";
import UseEffectProfile from './UseEffectProfile'

export default function Profile() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(10)
    
    useEffect(() => {
        console.log('Count use Effect');
    },[count])

    useEffect(() => {
        console.log("Data use Effect")
    },[data])

    return(
        <>
            <h1>Count {count}</h1>
            <h1>Data Count {data}</h1>
            <button onClick={() => setCount(count +1)}>Update Count</button>
            <button onClick={() => setData(data + 1)}>Update Data</button>
            <UseEffectProfile count={count} data={data} />
        </>
    )
}