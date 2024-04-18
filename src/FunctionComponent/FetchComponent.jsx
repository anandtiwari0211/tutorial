import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomHooks from "./CustomHooks";

function FetchComponent() {
    const [data] = CustomHooks("https://demo7131564.mockable.io/getData")
    // const [data1] = CustomHooks("https://demo7131564.mockable.io/getData")

    return(
        <>
            <div>
                <h1>Fetch Data from API</h1>
                <Link to="/aboutus">Home</Link><br />
                <table style={{border:"1"}}> 
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                    {
                        data && data.map((item) =>
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                        )
                    }
                </table>
            </div>
        </>
    )
}

export default FetchComponent