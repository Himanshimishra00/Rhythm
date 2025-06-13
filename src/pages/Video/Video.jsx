import React from 'react';
import axios from 'axios';
import styles from './video.module.css';
import { useQuery } from '@tanstack/react-query';

const API_KEY ='AIzaSyAEirhNh0I__Gj25ssVuKnO25W58O11EW0' ;
const SEARCH_QUERY = 'dance tutorials';

const fetchVideos = async () => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: SEARCH_QUERY,
        maxResults: 8,
        type: 'video',
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (err) {
    throw new Error(err?.response?.data?.error?.message || 'Failed to fetch videos');
  }
};

const Video = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    staleTime: 10000,
  });

  return (
    <div className={styles.container}>
      <h1>🩰 Discover Dance</h1>
      <p className={styles.subtitle}>
        Learn popular dance moves from top YouTube choreographers. Just press play and groove!
      </p>

      {isLoading && <p className={styles.status}>Loading dance videos...</p>}
      {error && <p className={styles.error}>{error.message || 'Error loading videos'}</p>}

      <div className={styles.grid}>
        {data?.map((video) => (
          <div key={video.id.videoId} className={styles.card}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>{video.snippet.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
