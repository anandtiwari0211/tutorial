import React, { useState, createContext } from "react";
import SecondComponent from "./SecondComponent";
import ThiredComponent from "./ThiredComponent";

export const UserContext = createContext();

function FirstComponent() {
    const [user, setUser] = useState('Anand')

    return(
        <>
            <h1>First Component</h1>
            <UserContext.Provider value={{user}}>
                <p>{`Hello ${user}`}</p>
                {/* <SecondComponent  /> */}
                <ThiredComponent />
            </UserContext.Provider>
            
            {/* <SecondComponent user={user} /> */}
        </>
    )
}

export default FirstComponent