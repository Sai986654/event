import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About SPG Events ✨</h1>
        <p>
          Crafting unforgettable celebrations with creativity, elegance, and
          precision. We make your vision come to life — one event at a time.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-intro">
        <div className="intro-content">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
            alt="Event Setup"
          />
          <div>
            <h2>Who We Are</h2>
            <p>
              SPG Events is a creative event management company dedicated to
              designing and delivering extraordinary experiences. From weddings
              and receptions to birthdays and corporate events, our team brings
              ideas to life with passion and precision. With years of expertise,
              trusted vendors, and a love for detail, we ensure every occasion
              reflects your personality and story.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="about-values">
        <h2>Our Mission & Core Values 🌟</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🎯 Excellence</h3>
            <p>
              We deliver events that surpass expectations through innovation,
              quality, and flawless execution.
            </p>
          </div>

          <div className="value-card">
            <h3>💡 Creativity</h3>
            <p>
              Each event is a blank canvas — we bring originality and artistry
              to every celebration.
            </p>
          </div>

          <div className="value-card">
            <h3>🤝 Commitment</h3>
            <p>
              Your happiness is our top priority. We’re with you every step of
              the way — from idea to applause.
            </p>
          </div>

          <div className="value-card">
            <h3>🌿 Sustainability</h3>
            <p>
              We care for our planet and promote eco-friendly solutions for
              responsible, sustainable celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team">
        <h2>Meet Our Team 👥</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
              alt="Team Member"
            />
            <h4>Sowmya</h4>
            <p>Founder & Creative Director</p>
          </div>
          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80"
              alt="Team Member"
            />
            <h4>Ananya Reddy</h4>
            <p>Event Designer</p>
          </div>
          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
              alt="Team Member"
            />
            <h4>Vikram Singh</h4>
            <p>Operations Head</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <h2>Let’s Create Something Unforgettable 🎉</h2>
        <button onClick={() => navigate("/service-selection")}>
          Get a Quotation
        </button>
      </section>
    </main>
  );
};

export default AboutUs;
