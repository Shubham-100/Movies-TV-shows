// Material UI import for bottom nav bar
import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'
import { useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import './footer.css';

const useStyles = makeStyles(
    {
        root: 
        {
            width: "100%",
            position: "fixed",
            bottom: 0,
            backgroundColor: "#39445a",
            zIndex: 100,
            color: '#ffffff',
        },
    }
)


export default function SimpleBottomNavigation() {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate(("/"));
    }  else {
      navigate(("/search"));
    }
    
  }, [value, navigate]);


  return (
    <Box sx={{ width: 100}}>
      <BottomNavigation className={classes.root}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon fontSize="large" />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon fontSize="large"/>} />
      </BottomNavigation>
    </Box>
  );
}
