import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const style = {
  position: 'absolute',
  top: '50%',
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
  return (
    <Box
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >
      <TextField sx={boxStyle} id="outlined-basic" label="Search for TV shows and Movies" variant="outlined" />
      <Button variant="contained" endIcon={<SearchIcon fontSize="large"/>}>
        Search
      </Button>
    </Box>
  );
}