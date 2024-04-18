import React from "react";

export default class FirstWillUnmount extends React.Component {

    componentWillUnmount() {
        alert("First Component deleted");
    }

    render(){
        return(
            <>
                <div>
                    <h1>Component Will Unmount</h1>
                    <ul>
                        <li>Name: xyz</li>
                        <li>Email: xyz@gmail.com</li>
                        <li>Phone: 123456</li>
                    </ul>
                </div>
            </>
        )
    }
}