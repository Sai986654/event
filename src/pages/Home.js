import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <h1>Welcome to SPG Events</h1>
      <p>
        Crafting unforgettable experiences for your special moments.  
        From Birthdays to Weddings — SPG Events takes care of everything  
        with transparency, elegance, and perfection.
      </p>

      <div className="home-buttons">
        <button onClick={() => navigate("/service-selection")}>
          Get a Quotation
        </button>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </main>
  );
};

export default Home;
