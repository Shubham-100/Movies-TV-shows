import Header from './Components/Header/Header.js';
import SimpleBottomNavigation from './Components/Footer/Footer.js';
import Trending from './Components/Trending/Trending.js';
import  {Routes, Route} from 'react-router-dom';
import React from "react";
import {useState, useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Search from './Components/Trending/Search.js';

function App() {
  const [trendingData, setTrendingData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    getTrending(page);
  }, [page]);

  const getTrending = async (page) => {
    const api = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=2152a5d77cf288227bc1af054e424936&page=${page}`);
    const data = await api.json();
    setTrendingData(data.results);
  };

  const changePage = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className='head'><Header/></div>
        <div className='cont'>
            <Routes>
             <Route path='/' element={<Trending tdata = {trendingData}/>}></Route>
             <Route path='/search' element={<Search/>}></Route>
            </Routes>
        </div>  
        
        <div
            style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 0,
             }}
        >
            <Stack spacing={2}>
                <Pagination count={20} style={{alignSelf: 'center'}} page={page} color="secondary" variant="outlined"  size="medium" onChange={changePage} showFirstButton showLastButton showclassName="pagination" />
            </Stack>            
        </div>
        
        <div className='foot' style={{textAlign: 'center'}}><SimpleBottomNavigation/></div>  
      </div>
      
    </React.Fragment>
  );
}

export default App;
