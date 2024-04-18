import React, {Component} from "react";

export default class EventStat extends Component {
    constructor() {
        super();
        this.state = {
            name: 'abc',
            email: 'abc@gmail.com',
            count:0
        }
    }

    updateState() {
        this.setState({
            name: "anand",
            email:"anand@gmail.com",
            count: this.state.count + 1
        });
    }

    render(){
        console.log('render');
        return(
            <>
                <div>
                    <h1>Event Handling with state</h1>
                    <h1>Name : {this.state.name}</h1>
                    <h1>Email : {this.state.email}</h1>
                    <p>Count : {this.state.count}</p>
                    <button onClick={() => this.updateState()}>Update State</button>
                </div>
            </>
        )
    }
}