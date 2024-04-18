import React, {Component} from 'react'

class PropsClass extends Component {
    render() {
        return(
            <>
                <div>
                    <h1>Props Class Component</h1>
                    <p>{this.props.data.fname}</p>
                    <p>{this.props.data.lname}</p>
                    <p>{this.props.data.age}</p>
                    <p>{this.props.data.city}</p>
                </div>
            </>
        )
    }
}

export default PropsClass