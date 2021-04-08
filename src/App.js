
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
function App() {

  const [todos, setTodos] = useState(['Hello', 'Come', 'Here'])
  const [ayah, setAyah] = useState('')

  const url = 'https://api.quran.com/api/v4/verses/random?language=en&words=true'
  useEffect(() => {
    axios.get()
      .then(response => response.data)
    setAyah(response.data)
  })

  return (
    <div className="App">

      <h1> Todo App </h1>

      <input


      />
      <button>Add Task</button>

      <ul>



      </ul>

    </div>
  );
}

export default App;
