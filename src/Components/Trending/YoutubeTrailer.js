import React, {useState, useEffect} from 'react';

import YouTube from 'react-youtube';

export default function YoutubeTrailer({id, media}) {

  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  const [link, setLink] = useState("");

  const getYTLink = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=2152a5d77cf288227bc1af054e424936`);
    const data = await api.json();
    setLink(data.results[0]?.key);
    console.log(data);
  };

  useEffect(()=>{
    getYTLink();
  });

  return (
    <React.Fragment>
      <YouTube videoId={link} opts={options} style={{position: 'absolute', left: 400, top: 120}}/>
    </React.Fragment>
  );
}
