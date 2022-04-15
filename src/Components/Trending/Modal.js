import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {img_300} from './config.js';
import YoutubeTrailer from './YoutubeTrailer.js';
import Cast from './Cast.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '75%',
  bgcolor: '#39445a',
  border: '2px solid #000',
  boxShadow: 48,
  p: 4,
  textAlign: 'justify',
};

export default function ContentModal({id, title, media, poster, overview, modal}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>More Info?</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography color='white' id="transition-modal-title" variant="h4" component="h1">
              {title}
            </Typography>
            <Typography color='white' id="transition-modal-description" sx={{ mt: 2 }}>
              {overview}
            </Typography>
            <img
              src = {`${img_300}/${poster}`}
              width = {325}
              height = {432}
              alt = {title}
            />
          <YoutubeTrailer id={id} media={media}/>
          <Cast/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
