import React, { useState, useEffect } from 'react'
import './trending.css';

export default function Trending() {

    var axios = require("axios").default;

    const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    var promise = new Promise((resolve, reject) => {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movies/day?api_key=2152a5d77cf288227bc1af054e424936&page=1"
        )
        .then((res) => {
          resolve(res.data);
          reject("not found");
        });
    });
    promise.then((res) => {
      setTrendingData(res);
    });
  }, [axios]);

  console.log(trendingData);

  return (
    <React.Fragment>
    Trending
    {}
    </React.Fragment>
  );
}

