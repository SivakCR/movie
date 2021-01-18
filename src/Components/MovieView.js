import { Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Poster from './Poster'
import Header from './Header'
function MovieView(props) {
    const [list,setList] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/'+props.match.params.id+'?api_key=8a3590169fffe5af15b893193281108b&language=en-US' )
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            setList(result)
          }, 
          (error) => {
            console.log(error);
          }
        )
      },[])

    return (
        <div>
            <Header/>
            <Container>
                <Poster 
                    backdrop={list.backdrop_path}
                    poster_path={list.poster_path}
                    original_title={list.original_title}
                    tagline ={list.tagline }
                    popularity={list.popularity}
                    release_date={list.release_date}
                    revenue={list.revenue}
                    overview={list.overview}
                />
                <Typography  variant="p" component="h2">
                    Overview:
                </Typography>
                <Typography  variant="p" component="p">
                    {list.overview}
                </Typography>
                <Typography  variant="p" component="h2">
                    Revenue:
                </Typography>
                <Typography  variant="p" component="p">
                    $ {list.revenue}
                </Typography>
                
                <Typography  variant="p" component="h2">
                    Budget:
                </Typography>
                <Typography  variant="p" component="p">
                    $ {list.budget}
                </Typography>
                <Typography  variant="p" component="h2">
                    Runtime:
                </Typography>
                <Typography  variant="p" component="p">
                    {list.runtime} mins
                </Typography>
                <Typography  variant="p" component="h2">
                    Votes:
                </Typography>
                <Typography  variant="p" component="p">
                    {list.vote_average} ({list.vote_count})
                </Typography>
            </Container>
        </div>
    )
}

export default MovieView
