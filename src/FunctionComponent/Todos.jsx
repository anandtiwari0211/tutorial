import { memo } from "react";

const Todos = ({todos,addTodo}) => {
    console.log('Child Component')
    return(
        <>
        <div>
            
            {
                todos.map((todo, index) => {
                    return <p key={index}> {todo + index}</p>
                })
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
        </>
    )
}
export default memo(Todos)