import {  Link } from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 5,
    flexWrap: 'auto',
    borderRadius:'15px',
    transition:'fade',
},
media: {
    height: '300px',
    borderRadius:'20px',
    '&:hover': {
        paddingTop: 15,
        scale: 1.1
    }
  },
});

export default function MovieCard(props) {
  const classes = useStyles();

  return (
      <Link to={"/movies/"+props.id}>

        <Card className={classes.root}>
        <CardActionArea>
            <img
            className={classes.media}
            src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
            title={props.original_title}
            />
            <CardContent> 
            <Box fontWeight="fontWeightBold" m={1}> 
                {props.original_title}
                </Box>
                <Box fontWeight="fontWeightRegular" m={1}> 
                {props.release_date}
                </Box>
                <Box fontWeight="fontWeightRegular" m={1}> 
                Rating : {props.vote_average}-{props.id}
                </Box>
            </CardContent>
        </CardActionArea>
        
        </Card>

      </Link>
  );
}