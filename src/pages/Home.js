import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lightbox from "react-image-lightbox";
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

  // 🎞️ Gallery Images
  const galleryImages = [
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1607082349566-187342375b9d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1545665225-946f0b5b5e88?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1604908811158-1ffebf8e9e36?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529634899087-cd78bf166c68?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529634944331-2f39e2a67b26?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1602727962201-9b16b2f10f64?auto=format&fit=crop&w=1200&q=80",
  ];

  // Lightbox state
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p>
              “SPG Events transformed our wedding into a dream come true! Every
              detail was flawless, from décor to catering. Highly recommended!”
            </p>
            <h4>— Priya & Rakesh, Hyderabad</h4>
          </motion.div>

          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p>
              “The professionalism and creativity were top-notch. Our corporate
              annual event looked world-class. Kudos to the SPG team!”
            </p>
            <h4>— Sai Charan, TechNova Pvt Ltd</h4>
          </motion.div>

          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p>
              “Birthday party setup was beyond expectations. Great theme
              selection, beautiful decorations, and smooth coordination.”
            </p>
            <h4>— Keerthi, Vizag</h4>
          </motion.div>
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
      {/* =======================
          CALL TO ACTION (Contact Prompt)
      ======================== */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Plan Your Dream Event? ✨</h2>
          <p>
            From weddings and birthdays to corporate galas —  
            we bring your vision to life with creativity, elegance, and precision.
          </p>
          <button onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </section>

      {/* LIGHTBOX POPUP */}
      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex]}
          nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
          prevSrc={
            galleryImages[
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
        />
      )}
    </main>
  );
};

export default Home;
