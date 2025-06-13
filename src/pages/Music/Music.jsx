import React, { useState,useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from '../Home/Home.module.css';
import { NavLink } from 'react-router-dom';
import sty from './music.module.css';

const fetchSongs = async () => {
  const res = await fetch('https://itunes.apple.com/search?term=top&media=music&entity=song&limit=10');
  if (!res.ok) throw new Error('Failed to fetch songs');
  const data = await res.json();
  return data.results;
};

function Music() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentTrackId, setCurrentTrackId] = useState(null);

  const { data: songs, isLoading, isError, error } = useQuery({
    queryKey: ['songs'],
    queryFn: fetchSongs
  });

  const toggleAudio = (previewUrl, trackId) => {
    if (currentAudio) {
      currentAudio.pause();

      if (trackId === currentTrackId) {
        setCurrentAudio(null);
        setCurrentTrackId(null);
        return;
      }
    }

    const audio = new Audio(previewUrl);
    audio.play();
    setCurrentAudio(audio);
    setCurrentTrackId(trackId);

    audio.addEventListener('ended', () => {
      setCurrentTrackId(null);
      setCurrentAudio(null);
    });
  };

  if (isLoading) return <h3 style={{ height: '100vh', fontSize: '3rem' }}>Loading...</h3>;
  if (isError) return <h3 style={{ color: 'red' }}>Error: {error.message}</h3>;
  
  

  return (
    <div className={sty.container}>
      <div className={sty.headline}><h1>Top Music for You</h1></div>
      <div className={sty.musicContainer} style={{ justifyContent: 'start', flexWrap: 'wrap', rowGap: '2rem' }}>
        {songs.map((ele) => (
          <div className={`${sty.musicCard} ${currentTrackId === ele.trackId ? sty.playingCard : ''}`} key={ele.trackId}>
            <img src={ele.artworkUrl100} alt={ele.trackName} />
            <h2>{ele.trackName}</h2>
            <span
              style={{ cursor: 'pointer', fontSize: '24px', marginTop: '10px', display: 'inline-block' }}
              onClick={() => toggleAudio(ele.previewUrl, ele.trackId)}
            >
              {currentTrackId === ele.trackId ? '⏸' : '▶'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
