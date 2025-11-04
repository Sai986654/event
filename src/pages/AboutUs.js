import React from "react";

const AboutUs = () => {
  return (
    <main style={styles.container}>
      <section style={styles.card}>
        <h1 style={styles.heading}>About SPG Events</h1>
        <p style={styles.text}>
          SPG Events is a one-stop solution for creating memorable celebrations.  
          We specialize in weddings, receptions, corporate functions, and private parties — offering end-to-end planning from venue décor to catering, photography, and entertainment.
        </p>
        <p style={styles.text}>
          Our mission is to simplify your event planning through transparent quotations, curated vendor packages, and exceptional service.  
          Whether it’s an intimate gathering or a grand extravaganza, we make your dream event come alive ✨
        </p>
      </section>
    </main>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  card: {
    maxWidth: 900,
    background: "#fff",
    borderRadius: 12,
    padding: "40px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#ff5a5f",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "#333",
    marginBottom: 15,
  },
};

export default AboutUs;
