import React, { useState } from "react";
import MemoComponentSecond from "./MemoComponentSecond";
function MemoComponent() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(["anand","raj","vikas"])

    const increment = () => {
        console.log("Increment")
        setCount(() => count + 1)
    }
    return(
        <>
        <div>
            <h1>Parent Memo Component</h1>
            <MemoComponentSecond data={data} />
            <h1>Count : {count}</h1>

            <button onClick={increment}>Update</button>
        </div>
        </>
    )
}

export default MemoComponent