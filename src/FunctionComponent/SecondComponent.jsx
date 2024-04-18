import React,{useContext} from "react";
import ThiredComponent from "./ThiredComponent";
import { UserContext } from "./FirstComponent";


function SecondComponent(props) {
    const {user} = useContext(UserContext);
    return(
        <>
            <h1>Second Component</h1>
            <h1>{user}</h1>
            {/* <ThiredComponent user={props.user} /> */}
        </>
    )
}

export default SecondComponent