import React, { useEffect } from "react";

export default function UseEffectProfile(props) {

    useEffect(() => {
        alert('count is ' +props.count)
    },[props.count])
    return(
        <>
            <h1>Prpos with use Effect</h1>
            <h1>Count : {props.count}</h1>
            <h1>Data Count : {props.data}</h1>
        </>
    )
}