
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState(['Help', 'B', 'C', 'D', 'E']);

  return (
    <div className="App">
      <h1> HELLO WORLD </h1>
      <input onChange={setTodos} />
      <button> Add a Task </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}> {todo} </li>
        ))}
        <li></li>


      </ul>
    </div>
  );
}

export default App;
