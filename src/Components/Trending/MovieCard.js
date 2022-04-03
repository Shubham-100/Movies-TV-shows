import React from 'react';
import {img_300} from './config.js';
import {unavailableLandscape} from './config.js';
import './MovieCard.css';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

function MovieCard({title, media, date, vote, image}) {
  return (
      <React.Fragment>
          <div className='content'>
            <img src={image ? `${img_300}/${image}` : unavailableLandscape} alt="" className="poster"/>
            <b className='title'>{title}</b>
            <br/>
            <span className='details'>{date}</span>
            <br/>
            <span className='details'>{media === "tv" ? "Web Series" : "Movie"}</span>
          </div>

          <Stack spacing={3} direction="column">
            {vote > 6  ? <Badge color="success" overlap="circular" badgeContent={vote} fontSize="large"></Badge> : <Badge color="error" overlap="circular" badgeContent={vote} fontSize="large"></Badge>}
          </Stack>

      </React.Fragment>
  )
}

export default MovieCard
