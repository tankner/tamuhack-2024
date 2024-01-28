import React from 'react';

const GoogleSearchResultItem = ({ title, snippet, credibility, url }) => {
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <a href={url} target="_blank" rel="noopener noreferrer" style={styles.title}>
          {title}
        </a>
        <span style={styles.credibility}>
          {credibility}
          {credibility > 80 ? (
            <img src="https://careerfair.sec.tamu.edu/system/comfy/cms/files/files/000/000/203/original/green_hat.png" alt="high credibility" width="30" height="20" />
          ) : credibility > 60 ? (
            <img src="https://careerfair.sec.tamu.edu/system/comfy/cms/files/files/000/000/202/original/yellow_hat.png" alt="medium credibility" width="30" height="20" />
          ) : (
            <img src="https://careerfair.sec.tamu.edu/system/comfy/cms/files/files/000/000/204/original/red_hat.png" alt="low credibility" width="30" height="20" />
          )}
        </span>
      </div>
      <p style={styles.snippet}>{snippet}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" style={styles.url}>
        {url}
      </a>
    </div>
  );
};

// Updated styles with credibility on the same line
const styles = {
  container: {
    margin: '8px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Roboto, sans-serif',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
    // container: {
    //   margin: '8px 0',
    //   padding: '10px',
    //   border: '1px solid #ddd',
    //   borderRadius: '8px',
    //   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    //   fontFamily: 'Roboto, sans-serif',
    // },
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
      padding: '5px',
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