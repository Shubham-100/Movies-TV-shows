import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useState, useEffect} from 'react';

export default function YoutubeTrailer({id, media}) {

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
      <Button variant="outlined"  startIcon={<YouTubeIcon/>} href={`https://www.youtube.com/watch?v=${link}`} target="_blank">
        See the trailer over YouTube
      </Button>
  );
}
