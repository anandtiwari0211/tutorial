import React, { useState } from "react";

export default function PostComponent() {

    const [data, setData] = useState({
        id:'',
        name:'',
        email:'',
        mobile:''
    })

    const URL = data.id ? updateURL : postURL;
    const method = data.id ? 'put': 'post'
    
    const handleSubmit = () => {
        fetch(URL,{method, headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body:JSON.stringify(data)
    }).then(res => {
        if(res.status === 200){
            if(data.id){
                alert('Update Success');
            }else{
                alert('Update Success');
            }
        }
    }).catch(e => {
        alert('failed')
    })
    }


    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>

            <input type="submit"/>
            </form>
            <h1>Post Component</h1>
        </div>
        </>
    )
}