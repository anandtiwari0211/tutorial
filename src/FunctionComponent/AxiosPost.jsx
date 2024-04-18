import React,{useState} from "react";
import axios from "axios";

export default function AxiosPost() {
    const data = {fname: '', lname: ''}
    const [inputData, setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData).then((res) => {
        console.log(res)
    })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/2",inputData).then((res) => {
        console.log(res)
    })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        console.log(res)
    })
    }
    return(
        <>
            <h1>Axois Post Component</h1>
            <label>First Name :</label>
            <input type="text" name="fname" value={inputData.fname} onChange={handleData} /><br/>
            <label>Last Name :</label>
            <input type="text" name="lname" value={inputData.lname} onChange={handleData} /><br/>

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleUpdate}>Update</button>

        </>
    )
}
