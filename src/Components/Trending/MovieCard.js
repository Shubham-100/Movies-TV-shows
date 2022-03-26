import React from 'react';
import {img_300} from './config.js';
import {unavailable} from './config.js';
import './MovieCard.css';

function MovieCard({title, media, date, vote, image}) {
  return (
      <React.Fragment>
          <div className='content'>
            <img src={image ? `${img_300}/${image}` : unavailable} alt="" className="poster"/>
            {/* <b className='title'>{title}</b>
            <span className='details'>{date}</span>
            <span className='details'>{media === "tv" ? "Web Series" : "Movie"}</span> */}
          </div>
      </React.Fragment>
  )
}

export default MovieCard
