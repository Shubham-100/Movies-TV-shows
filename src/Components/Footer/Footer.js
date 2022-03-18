// Material UI import for bottom nav bar
import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
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
            backgroundColor: "#6b6767",
            zIndex: 100,
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
    } else if (value === 1) {
        navigate(("/movies"));
    } else if (value === 2) {
        navigate(("/series"));
    } else if (value === 3) {
        navigate(("/search"));
    }
  }, [value, navigate]);


  return (
    <Box sx={{ width: 100 }}>
      <BottomNavigation className={classes.root}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<TrendingUpIcon />} />
        <BottomNavigationAction label="Movies" icon={<TheatersIcon />} />
        <BottomNavigationAction label="Web Series" icon={<LiveTvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
