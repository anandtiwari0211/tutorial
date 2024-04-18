import React,{useState, useEffect} from "react";
import axios from "axios";

function AxiosGet() {
    const [data, setData] = useState()
    const [error, setError] = useState('')

    useEffect(() =>{
        // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => 
        // setData(response.data))
        getApiData()
    },[])

    const getApiData = async() => {
        try{
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(result.data)
        }catch(e){
            console.log(e.message);
            setError(e.message);
        }
    }

    return(
        <>
            <div>
                <h1>Axios Component</h1>
                <p>{error}</p>
            </div>
        </>
    )
}
export default AxiosGet