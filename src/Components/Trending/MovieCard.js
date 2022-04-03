import React from 'react';
import {img_300} from './config.js';
import {unavailableLandscape} from './config.js';
import './MovieCard.css';

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
      </React.Fragment>
  )
}

export default MovieCard
