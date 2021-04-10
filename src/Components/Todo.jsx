import React from 'react'
import db from '../Database/firebase'
import DeleteIcon from '@material-ui/icons/Delete';

import { List, Grid, ListItemText, Button} from '@material-ui/core';



const Todo = (props) => {

    // const [open, setOpen] = useState(false);
    
    // const handleOpen = () => {
    //     setOpen(true);
        
    // }



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
         {/* <Button
         style={{marginLeft : "12vmin", marginTop: "2vmin"}}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={event => setOpen(true)}>Edit Task </Button> */}

{/* <Modal
  open={open}
  onClose={e => setOpen(false)}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
/>   */}

        </Grid>
  
        </Grid>
      

        </div>



    )
}

export default Todo
