import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <>
            {props.todoArray.map((todo, i) => 
                // console.log("This is what map gives", todo, "the second argument maps gives", i)
                <Todo key={i} todo={todo} />
            )}
        </>
    )
}

export default TodoList;