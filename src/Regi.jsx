import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default class Regi extends React.Component {
    render(){
        return(
            <>
                <h1>Routing</h1>
                <Link to="/">Home</Link>
            </>
        )
    }
}