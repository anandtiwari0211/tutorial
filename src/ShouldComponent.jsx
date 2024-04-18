import React from "react";

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        if(this.state.count > 1 && this.state.count < 10){
            return true;
        }
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render');
        return(
            <>
            <div>
                <h1>Should Component Update Method</h1>
                <p>Count : {this.state.count}</p>
                <button onClick={() => this.setState({count : this.state.count+1  })}>Update</button>
            </div>
            </>
        )
    }
}