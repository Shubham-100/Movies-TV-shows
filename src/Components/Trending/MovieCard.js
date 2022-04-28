import React, { useState } from 'react';
import {img_300} from './config.js';
import {unavailable} from './config.js';
import './MovieCard.css';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ContentModal from './Modal.js';

function MovieCard({id, title, media, date, vote, image, overview, tag}) {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
      <React.Fragment>

        { modal && <ContentModal id={id} title={title} media = {media} poster={image} overview={overview} modalOpen={modal}/> }

          <div className='content'>
            <img src={image ? `${img_300}/${image}` : unavailable} alt={title} className="poster" onClick={toggleModal}/>
            <b className='details'>{title}</b>
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
