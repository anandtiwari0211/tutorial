import React,{useEffect, useState} from "react";
function MultipleApiCall() {

    const [data, setData]= useState([])
    const [item, setItem]= useState([])

    useEffect(() => {
        handleFirstApi()
        handleSecondApi()
    },[])

    const handleFirstApi = () => {
        fetch("https://demo7131564.mockable.io/getData").then((res) =>{
            res.json().then((result) => {
                console.log(result);
                setItem(result);
            })
        })
    }

    const handleSecondApi = () => {
        fetch("https://demo7131564.mockable.io/getData").then((res) =>{
            res.json().then((result) => {
                console.log(result);
                setData(result);
            })
        })
    }

    return(
        <>
            <div>
                <h1>Multiple API Call</h1>

                <table>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default MultipleApiCall