// import selfmade componenets here
import Header from './Components/Header/Header.js';
import SimpleBottomNavigation from './Components/Footer/Footer.js';
import Trending from './Components/Trending/Trending.js';
import  {Routes,Route} from 'react-router-dom';
import PaginationOutlined from './Components/Trending/Pagination.js';
// import other react and material ui based libs
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <div className='head'><Header/></div>
        <div className='cont'>
            <Routes>
            { <Route path='/' element={<Trending/>}></Route>}
            {/* { <Route path='/series' element={}></Route>} */}
            </Routes>
        </div>  
        <div className='page'><PaginationOutlined/></div>
        <div className='foot'><SimpleBottomNavigation/></div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
