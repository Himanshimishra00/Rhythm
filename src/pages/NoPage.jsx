import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, the page you're looking for doesn't exist.</p>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate('/')} style={styles.button}>Back to Home</button>
        <button onClick={() => navigate(-1)} style={styles.button}>Go Back</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  overflow: 'hidden',
  padding: '2rem',
  textAlign: 'center',
}
,
  heading: {
    fontSize: '3rem',
    color: '#ff4d4d',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
  },
};

export default NoPage;

