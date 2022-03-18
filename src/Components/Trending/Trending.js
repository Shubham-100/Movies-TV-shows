import React, { useState, useEffect } from 'react'
import './trending.css';

export default function Trending() {

    var axios = require("axios").default;

    const [trendingData, setTrendingData] = useState({});

    useEffect(async () => {
      const { data } = await axios.get('https://api.themoviedb.org/3/trending/movies/day?api_key=2152a5d77cf288227bc1af054e424936&page=1');
      console.log(data);
      setTrendingData(trendingData);
      console.log(data.results[0].title);
    });

  return (
    <React.Fragment>
    Trending
    </React.Fragment>
  );
}

