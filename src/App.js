// import selfmade componenets here
import Header from './Components/Header/Header.js';
import SimpleBottomNavigation from './Components/Footer/Footer.js';
import  {Routes,Route} from 'react-router-dom';
// import other react and material ui based libs
import React from "react";
import Trending from './Components/Trending/Trending.js';
import MediaCard from './Components/Trending/Trending.js';

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header/>
        <SimpleBottomNavigation/>
      </div>
      <Routes>
        { <Route path='/' element={<Trending/>}></Route>}
        {/* <Route path='/movies' element={}></Route>
        <Route path='/series' element={}></Route>
        <Route path='/search' element={}></Route> */} 
      </Routes>
    </React.Fragment>
  );
}

export default App;
