
import './App.css';
import React, { useState, useEffect } from 'react'
import Todo from './Components/Todo';
import db from './Database/firebase'
import firebase from 'firebase'
import { TextField, Container, Button, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import main from './Images/main.svg'
import Footer from './Components/Footer';




function App() {

  //when the app loads
  //we need to listen to the database changes
  //then fetch new databases info 

  const [todos, setTodos] = useState([''])
  const [input, setInput] = useState([''])

  useEffect(() => {
    db.collection('todos').orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().task })));
    })
  }, [])

  const addTodos = (event) => {
    event.preventDefault()

    //adds to the database, so simple and beautiful
    db.collection('todos').add({
      task: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (



    <Container maxWidth="sm" className="center">


      <h1 className="title"> Minimal ToDo App </h1>
      <h2> Made with React 🤖, FireBase 🔥 & Material UI 🎨 </h2>


      <Grid container spacing={2}>


        <Grid item xs={6}>
          <form >
            <TextField

              id="filled-full-width"
              value={input}
              onChange={event => setInput(event.target.value)}
              placeholder="Enter your Todos here  😃"
              fullWidth
              style={{ paddingBottom: "11px", paddingLeft: "2vmin" }}

              variant="filled"

            />
          </form>


        </Grid>
        <Grid item xs={6}>
          <Button variant="contained"
            className="size"
            size="large"
            type="submit"
            onClick={addTodos}
            startIcon={<AddCircleIcon />}
            style={{ width: "25vmin" }}
          >Add Task 🚀 </Button>

        </Grid>


        <ul className="list" >
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>






      </Grid>
      <Footer />
    </Container>




  );
}

export default App;
