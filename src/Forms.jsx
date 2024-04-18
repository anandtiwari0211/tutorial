import React, {Component, PureComponent} from 'react'

class Forms extends PureComponent {
constructor(){
    super();
    this.state= {data : 10}
}

render() {
    console.log(this.state.data);
    return(
        <>
            <h>Pure Component</h>
            <h1>{this.state.data}</h1>
            <button onClick={() => this.setState({data : 20})}>submit</button>
        </>
    )
}
}

export default Forms