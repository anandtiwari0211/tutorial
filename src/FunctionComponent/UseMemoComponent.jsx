import React, { useState, useMemo } from "react";

function UseMemoComponent() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)


    // function multiCount () {
    //     console.log("multiCount")
    //     return count * 3
    // }

    const multiCountMemo = useMemo(function multiCount() {
            console.log("multiCount")
            return count * 3
    },[count])

    return(
        <>
            <div>
                <h1>Use Memo Component</h1>
                <h1>Count : {count}</h1>
                <h2>Item : {item}</h2>
                <h2>Multiply : {multiCountMemo}</h2>

                <button onClick={() => setCount(count + 1)}>Count Update</button> <hr/>
                <button onClick={() => setItem(item * 2)}>Item Update</button>
            </div>
        </>
    )
}

export default UseMemoComponent