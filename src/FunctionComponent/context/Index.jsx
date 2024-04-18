import React,{createContext, useState} from "react";
import SuperChild from "./SuperChild";

export const GlobalInfo = createContext();

function Context() {
    const [color, setColor] = useState('red')
    const [day, setDay] = useState("Sunday")

    const getDay = (item) => {
        console.log('item');
        setDay(item);
    }

    return(
        <>
            <GlobalInfo.Provider value={{appColor: color, getDay:getDay}}>
            <div>
                <h1>Parent Component</h1>
                <h1>{day}</h1>
            </div>
            <SuperChild />
            </GlobalInfo.Provider>
        </>
    )
}

export default Context