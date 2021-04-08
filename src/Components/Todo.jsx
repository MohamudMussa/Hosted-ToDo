import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <h1> {props.heading} </h1>
      <li> {props.text} </li>
        </div>
    )
}

export default Todo
