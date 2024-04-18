import React, {Component} from "react";
import Toggle from "./Toggle";

export default class Hideshow extends Component {
    constructor() {
        super()
        this.state = {
            show:true
        }
    }

    render() {
        return(
            <>
                <div>
                    <h1>Hide Show Function</h1>
                    {
                       this.state.show ? <><button>Hode Show Button</button><br /></> : <Toggle /> 
                    }
                    <button onClick={() => {this.setState({show :!this.state.show})}}>Hide Section</button>
                </div>
            </>
        )
    }
}