import React from "react";
import FirstWillUnmount from "./FirstWillUnmount";
export default class SecondWillUnmount extends React.Component{
    constructor(){
        super();
        this.state ={
            toggle:true
        }
    }

    render() {
        return(
            <>
            
            {
                this.state.toggle ? <FirstWillUnmount /> : null
            }
            <button onClick={() => {this.setState({toggle : !this.state.toggle})}}>
                Submit
            </button>
            </>
        )
    }
}