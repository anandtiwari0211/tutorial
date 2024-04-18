import React, {createRef} from "react";

export default class Cust extends React.Component {
    constructor() {
        super();
        this.inputRef = createRef()
    }

    getVal() {
        // console.log(this.inputRef.current.value = 1000);
        // this.inputRef.current.style.color="red"
        // this.inputRef.current.style.background="black"
        this.inputRef.current.focus();
        console.log(this.inputRef.current.placeholder);

    }

    render() {
        return(
            <>
                <div>
                    <h1>Ref in React</h1>
                    <input type="text" ref={this.inputRef} placeholder="Email"/>
                    <button onClick={() => this.getVal()}>Check Ref</button> 
                </div>
            </>
        )
    }
}