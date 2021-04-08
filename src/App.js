
import './App.css';
import React, { useState } from 'react'
import Todo from './Components/Todo';

function App() {

  const [todos, setTodos] = useState(['Help', 'Me', 'Code'])
  const [input, setInput] = useState([''])

  const addTodos = (event) => {
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">

      <h1> Todo App </h1>
      <form >
        <input
          name="tasks"
          value={input}
          onChange={event => setInput(event.target.value)}
        />

        <button
          type="submit"
          onClick={addTodos}
        >

          Add Task</button>

        <ul>
          {todos.map(todo => (
            <Todo text={todo} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
