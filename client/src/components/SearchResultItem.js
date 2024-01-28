import React from 'react';

const GoogleSearchResultItem = ({ title, snippet, credibility, url }) => {
  return (
    <div style={styles.container}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={styles.title}>
        {title}
      </a>
      <p style={styles.snippet}>{snippet}</p>
      <div style={styles.credibility}>{credibility}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" style={styles.url}>
        {url}
      </a>
    </div>
  );
};

const styles = {
    container: {
      margin: '8px 0',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Roboto, sans-serif',
    },
    urlContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#1565C0',
      textDecoration: 'none',
      marginBottom: '5px',
      display: 'block',
    },
    snippet: {
      fontSize: '14px',
      marginBottom: '5px',
    },
    credibility: {
      fontSize: '14px',
      marginTop: '5px',
      marginRight: '8px',
    },
    url: {
      fontSize: '13px',
      color: '#424242',
      textDecoration: 'none',
      display: 'block',
    },
    favicon: {
      width: '16px',
      height: '16px',
      marginRight: '8px',
    },
};

export default GoogleSearchResultItem;