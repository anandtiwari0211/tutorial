import React,{useContext} from "react";
import { GlobalInfo } from "./Index";

export default function SuperChild() {

    const {appColor,getDay} = useContext(GlobalInfo)
    const day = "Monday"
    return(
        <>
        <h1 style={{color:appColor}}> Super Component</h1>
        <button onClick={() => getDay(day)}>Click Botton</button>
        </>
    )
}