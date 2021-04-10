import React from 'react'
import db from '../Database/firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';

import { List, Grid, ListItemIcon, ListItemText, Button, Container} from '@material-ui/core';



const Todo = (props) => {
    return (

        <div style={{paddingLeft : "3vmin"}}> 
                    <Grid container spacing={1}>


        <Grid item xs={6}>

        <List > 

      <ListItemText >  {props.todo.todo }  </ListItemText>
          
      
      </List>

        </Grid>
        <Grid item xs={6}>

    
        <Button
         style={{marginLeft : "12vmin"}}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Task </Button>

        </Grid>
  
        </Grid>
             

        </div>


 
    )
}

export default Todo
