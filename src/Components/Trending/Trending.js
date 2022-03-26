import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';

export default function Trending() {

  const [trendingData, setTrendingData] = useState([]);

  useEffect(()=>{
    getTrending();
  }, []);

  const getTrending = async () => {
    const api = await fetch("https://api.themoviedb.org/3/trending/movies/day?api_key=2152a5d77cf288227bc1af054e424936&page=1");
    const data = await api.json();
    setTrendingData(data.results);
    console.log(data.results);
  };

  return (
    <React.Fragment>
      <span>Trending</span>
      <div className='trending'>
        {
          trendingData && trendingData.map((movie)=>(
          <MovieCard key={movie.id} title={movie.name || movie.title} media={movie.media_type} date={movie.first_air_date || movie.release_date} vote={movie.vote_average} image={movie.poster_path}/>
          ))
        }
      </div>
    </React.Fragment>
  );
}

