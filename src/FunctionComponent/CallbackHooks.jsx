import React, { useState,useCallback } from "react";
import Todos from "./Todos";
const CallbackHooks = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    
    const increment = () => {
        setCount(count +1);
    }

    // const addTodo = () => {
    //     console.log('calling')
    //     setTodos((prev) => [...prev, 'new Entry']);
    // }

    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, 'new Entry']);
    },[todos])

    return(
        <>
        <Todos todos={todos} addTodo={addTodo} />
        
        <h1>Count : {count}</h1>
        <button onClick={increment} > + </button>
        </>
    )
}
export default CallbackHooks