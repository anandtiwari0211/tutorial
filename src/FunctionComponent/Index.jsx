import React, {useState} from "react";
import FirstUser from "./FirstUser";
import { Link } from "react-router-dom";
function FunComponent() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);
    return(
        <>
        <h1>Use State In React</h1>
        <p style={{textAlign:'center'}}>{count}</p>
        <h1>{data}</h1>
        <button onClick={() => {setCount(count + 1)}}>Submit</button>
        <button onClick={() => {setData(data + 10)}}>Data Button</button>
        <FirstUser counter={count} data={data} />
        </>
    )
}
export default FunComponent