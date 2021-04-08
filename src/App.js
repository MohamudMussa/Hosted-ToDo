
import './App.css';
import React, { useState, useEffect } from 'react'
import Todo from './Components/Todo';
import db from './Database/firebase'

function App() {

  //when the app loads
  //we need to listen to the database changes
  //then fetch new databases info 

  const [todos, setTodos] = useState([''])
  const [input, setInput] = useState([''])

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  })

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
