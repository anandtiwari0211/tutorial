import React, { useRef } from "react";

export default function HooksRef() {
    let inputRef = useRef(null)

    function updateInput() {
        inputRef.current.value = '1000'
        inputRef.current.focus();
    }
    return(
        <>
            <h1>Hooks Use Raf</h1>
            <input type="text" ref={inputRef} />
            <button onClick={updateInput}>Submit</button>
        </>
    )
}