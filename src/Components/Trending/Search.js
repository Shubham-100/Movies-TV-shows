import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import MovieCard from './MovieCard.js';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  height: '20%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 48,
  p: 4,
  textAlign: 'justify',
  color: 'white',
};

const boxStyle = {
  color:'white',
}

export default function BasicTextFields() {

  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("");


  const search = async () => {
     const api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2152a5d77cf288227bc1af054e424936&query=${query}&page=1`);
     const data = await api.json();
     setContent(data.results);
     console.log(data.results);
  };

  const handleChange = event => {
    setQuery(event.target.value);
    console.log(event.target.value);
  }

  return (
    <Box
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >
      <TextField sx={boxStyle} id="outlined-basic" label="Search Content..." variant="outlined" onChange={handleChange} onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          search();
        }
      }}/>
      <Button variant="contained" endIcon={<SearchIcon fontSize="large"/>} onClick={search}>
        Search
      </Button>

      {
          content && content.map((movie)=>(
          <MovieCard key = {movie.id} id={movie.id} title={movie.name || movie.title} media={movie.media_type} date={movie.first_air_date || movie.release_date} vote={movie.vote_average} image={movie.poster_path} overview={movie.overview}/>))
      }
    </Box>
  );
}