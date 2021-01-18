import React from 'react'
import {  Grid, Paper, TextField, Typography } from '@material-ui/core';
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
function Poster(props) {
    const classes = useStyles();
    return (
        <div 
        style={{
          width: '100%',
          height: '700px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor  :'#032541',
          backgroundImage:"url(" + "https://www.themoviedb.org/t/p/w500_and_h282_face"+props.backdrop+ ")",
          }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >  
                <Grid item xs={1}>
                 </Grid>
                <Grid item xs={5}>
                    <img 
                        style={{ objectFit:'contain'}}
                        src={"https://www.themoviedb.org/t/p/w500_and_h282_face"+props.poster_path}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Typography style={{color:'white'}} variant="h1" component="h1">
                        {props.original_title}
                    </Typography>
                    <Typography style={{color:'white'}} variant="p" component="h2">
                        {props.original_title}
                    </Typography>
                    <Typography style={{color:'white'}} variant="h6" component="h2">
                        {props.release_date}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                 </Grid>
            </Grid>
            
        </div>

    )
}

export default Poster
