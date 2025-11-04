import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  const heroImages = [
    "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1600&q=80",
  ];

  const randomBg = useMemo(
    () => heroImages[Math.floor(Math.random() * heroImages.length)],
    []
  );

  const galleryImages = [
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1607082349566-187342375b9d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1545665225-946f0b5b5e88?auto=format&fit=crop&w=1200&q=80",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePrev = () =>
    setPhotoIndex(
      (photoIndex - 1 + galleryImages.length) % galleryImages.length
    );
  const handleNext = () =>
    setPhotoIndex((photoIndex + 1) % galleryImages.length);

  return (
    <main className="home-container">
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${randomBg})` }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Celebrate Every Moment with SPG Events 🎊</h1>
          <p>
            From grand weddings to corporate functions, birthdays to receptions — 
            we design, manage, and execute your event with creativity, elegance, 
            and precision. Your celebration, our perfection.
          </p>
          <div className="home-buttons">
            <button onClick={() => navigate("/service-selection")}>
              Get Quotation
            </button>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <h2>What Our Clients Say 💬</h2>
        <div className="testimonials-container">
          {[
            {
              quote:
                "SPG Events transformed our wedding into a dream come true! Every detail was flawless, from décor to catering. Highly recommended!",
              author: "Priya & Rakesh, Hyderabad",
            },
            {
              quote:
                "The professionalism and creativity were top-notch. Our corporate annual event looked world-class. Kudos to the SPG team!",
              author: "Sai Charan, TechNova Pvt Ltd",
            },
            {
              quote:
                "Birthday party setup was beyond expectations. Great theme selection, beautiful decorations, and smooth coordination.",
              author: "Keerthi, Vizag",
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>“{t.quote}”</p>
              <h4>— {t.author}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <h2>Our Event Highlights 📸</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => {
                setPhotoIndex(idx);
                setIsOpen(true);
              }}
            >
              <img src={img} alt={`Event ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Plan Your Dream Event? ✨</h2>
          <p>
            From weddings and birthdays to corporate galas — we bring your vision 
            to life with creativity, elegance, and precision.
          </p>
          <button onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </section>

      {/* CUSTOM LIGHTBOX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="custom-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lightbox-content">
              <img src={galleryImages[photoIndex]} alt="Event preview" />
              <button className="lightbox-close" onClick={() => setIsOpen(false)}>
                ✖
              </button>
              <button className="lightbox-prev" onClick={handlePrev}>
                ‹
              </button>
              <button className="lightbox-next" onClick={handleNext}>
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
