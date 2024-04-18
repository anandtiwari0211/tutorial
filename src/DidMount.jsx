import React from "react";

export default class DidMount extends React.Component{
    constructor() {
        super();
        console.log('constructor')
        this.state= {
            data: null
        }
    }

    componentDidMount()
    {
        // alert('componentDidMount')
        console.log('componentDidMount');
        this.setState({data : 10})
    }

    render() {
        console.log('render')
        return(
            <>
                <div>
                    <h1>Life Cycle Method Component Did Mount</h1>
                    <p>State count {this.state.data}</p> 
                </div>
            </>
        )
    }
}