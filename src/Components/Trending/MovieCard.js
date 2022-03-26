import React from 'react';
import {img_300} from './config.js';
import {unavailable} from './config.js';

function MovieCard({title, date, vote, image}) {
  return (
      <React.Fragment>
        <div>{title}</div>
        <img src={`${img_300}/${image}`} alt={`${unavailable}`}/>
      </React.Fragment>
  )
}

export default MovieCard