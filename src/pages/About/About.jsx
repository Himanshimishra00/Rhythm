import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      

      <section className={styles.section}>
        <h2>🎧 What We Offer</h2>
        <ul>
          <li><span>Explore Music:</span> Discover trending tracks and create your own playlists.</li>
          <li><span>Learn to Dance:</span> Dive into dance styles with expert choreographers.</li>
          <li><span>Stay Inspired:</span> Fresh content to keep your rhythm alive.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>💡 Our Mission</h2>
        <p>
          We believe music and dance transcend boundaries. Our mission is to inspire expression and
          community through rhythm, energy, and creativity.
        </p>
      </section>

      <section className={styles.section}>
        <h2>🌍 Join Our Journey</h2>
        <p>
          Whether you’re a listener, dancer, or creator — this is your space. Let’s grow, groove, and
          vibe together.
        </p>
      </section>
    </div>
  );
};

export default About;
