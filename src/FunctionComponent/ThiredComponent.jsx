import React,{useContext} from "react";
import { UserContext } from "./FirstComponent";

function ThiredComponent(props) {
    const {user} = useContext(UserContext);
    return(
        <>
            <h1>Thired Component</h1>
            <h3>{user}</h3>
        </>
    )
}

export default ThiredComponent