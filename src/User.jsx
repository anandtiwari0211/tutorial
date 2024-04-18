import React from "react";

function User(props) {
    // const obj = {fname, lname}
    const {fname,lname, age, city} = props.data;
    return(
        <>
           <div>
            <ol>
                <li>{fname}</li>
                <li>{lname}</li>
                <li>{age}</li>
                <li>{city}</li>
            </ol>
           </div>

        </>
    )
}

export default User;