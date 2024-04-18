import React,{useState} from "react";

export default function FirstUser(props) {
    return(
        <>
            <h1>User Component {props.counter}</h1>
            <h1>User Component Data {props.data}</h1>
        </>
    )
}