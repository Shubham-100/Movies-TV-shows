import React from 'react'
import MovieCard from './MovieCard';

export default function Trending({tdata}) {
  return (
    <React.Fragment>
      <span>Trending</span>
      <div className='trending'>
        {
          tdata && tdata.map((movie)=>(
          <MovieCard key = {movie.id} id={movie.id} title={movie.name || movie.title} media={movie.media_type} date={movie.first_air_date || movie.release_date} vote={movie.vote_average} image={movie.poster_path} overview={movie.overview}/>
          ))
        }
      </div>
    </React.Fragment>
  );
}

