import React from 'react';

const PackageCard = ({ title, features }) => (
  <div style={styles.card}>
    <h2 style={styles.title}>{title}</h2>
    <ul style={styles.list}>
      {features.map((item, idx) => (
        <li key={idx} style={styles.listItem}>{item}</li>
      ))}
    </ul>
  </div>
);

const styles = {
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: 280,
  },
  title: {
    fontSize: '1.5rem',
    borderBottom: '2px solid #333',
    paddingBottom: 8,
    marginBottom: 12,
  },
  list: {
    paddingLeft: 20,
  },
  listItem: {
    marginBottom: 6,
    fontSize: '1rem',
  },
};

export default PackageCard;
