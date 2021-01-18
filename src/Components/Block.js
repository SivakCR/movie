import React from 'react'
import {  Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '500px',
      
    },
  },
}));
function Block() {
    const classes = useStyles();
    return (
        <div 
        style={{
          width: '100%',
          height: '500px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'row',
          backgroundImage:"url(" + "https://www.themoviedb.org/t/p/w500_and_h282_face/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"+ ")",
          }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            > 
                <form className={classes.root}  noValidate autoComplete="off">
                    <Paper style={{display:'flex'}}>
                        <TextField style={{width:'500px',}} id="filled-basic" label="Search for a movie, tv show, person......" variant="filled" />
                        <Button style={{backgroundColor:"#d6b8c1",color:'black'}} variant="contained" color="secondary">
                             Search
                        </Button>
                    </Paper>
                </form>
            </Grid>
        </div>
    )
}

export default Block
