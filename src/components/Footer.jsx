import React, { useState } from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      alert("Thanks for your feedback!");
      setFeedback('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <h3>Feel the Rhythm</h3>
        <nav className={styles.navLinks}>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/video">Dance</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>

      <form className={styles.feedbackForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Leave a suggestion or feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Feel the Rhythm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
