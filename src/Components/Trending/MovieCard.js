import React, { useState } from 'react';
import {img_300} from './config.js';
import {unavailableLandscape} from './config.js';
import './MovieCard.css';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ContentModal from './Modal.js';

function MovieCard({title, media, date, vote, image, overview}) {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
      <React.Fragment>

        { modal && <ContentModal title={title} img={image} overview={overview} open={modal}/>}

          <div className='content'>
            <img src={image ? `${img_300}/${image}` : unavailableLandscape} alt="" className="poster" onClick={toggleModal}/>
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
