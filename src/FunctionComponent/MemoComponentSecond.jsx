import React,{memo} from "react";

function MemoComponentSecond(props) {
    console.log("Child Component")
    return(
        <>
            <div>
                <h1>My Data</h1>
                {
                    props.data.map((item) => 
                    <p>{item}</p>
                )
                }
            </div>
        </>
    )
}

export default memo(MemoComponentSecond)