import React from 'react'

export default class EventHanding extends React.Component {

    handleEvent() {
        alert("Called Event");
    }

    render(){
        return(
            <>
                <div>
                    <h1>Event Handling</h1>
                    <button onClick={() => this.handleEvent()}>Event</button>
                </div>
            </>
        )
    }
}