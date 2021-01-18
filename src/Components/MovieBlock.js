import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function MovieBlock(props) {

    const [list,setList] = useState([])
    const [movie,setMovie]=useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/list/'+props.id+'?api_key=8a3590169fffe5af15b893193281108b&language=en-US')
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
      
      
    useEffect(()=>{
        console.log(movie,list.items,'v')
        if( list.items !== undefined){
            setMovie(list.items) 
        }
    },[list])

    return (
        <div style={{backgroundColor:"#e0f3fe",marginTop:'3px',padding:'10px'}}>
            <h2 style={{marginLeft:20}}>
                {list.name}
            </h2>
            <h3 style={{marginLeft:20}}>
                List By {list.created_by}
            </h3>
            <div style={{
                flexWrap: 'wrap',
                display:'flex',
                justifyContent: 'center', 
            }}> 
                        
                        {
                            movie.map(item => 
                                <MovieCard
                                    original_title={item.original_title}
                                    id={item.id}
                                    overview ={item.overview }
                                    poster_path={item.poster_path}
                                    release_date={item.release_date}
                                    vote_average={item.vote_average}
                                />
                            )
                        }


            </div>
        </div>
    )
}

export default MovieBlock
