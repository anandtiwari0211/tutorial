import React from 'react'
import { Button } from 'react-bootstrap';

export default class DidUpdate extends React.Component {
    constructor(){
        console.log('constructor')
        super();
        this.state = {
            active:null,
            who:null
        }
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
        if(this.state.who == null){
            this.setState({who : "Test"})
        }
    }

    render() {
        console.log('render');
        return(
            <>
                <div>Component Did Update</div>
                <h1>React { this.state.who }</h1>
                <Button onClick={() => this.setState({active : "Yes"})} > Update</Button>
            </>
        )
    }
}