import React from "react";
import "../App.css";

const ContactUs = () => {
  return (
    <main className="contact-page">
      {/* CONTACT DETAILS + FORM */}
      <section className="contact-content">
        <div className="contact-left">
          <h2>Reach Us At</h2>
          <p>
            We’re always excited to discuss your event ideas and provide
            personalized quotes.
          </p>

          <div className="contact-info">
            <p>
              📍 <strong>Address:</strong> SPG Events, Hyderabad, Telangana
            </p>
            <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
            <p>✉️ <strong>Email:</strong> info@spgevents.com</p>
          </div>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting SPG Events! We’ll get in touch soon.");
            e.target.reset();
          }}
        >
          <h2>Send Us a Message</h2>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Phone Number" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your event..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* MAP SECTION */}
      <section className="contact-map">
        <iframe
          title="SPG Events Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.246548441657!2d78.47469407512242!3d17.385044983512736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975fc9f5675b%3A0xf7e92ec2f9e08ed1!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1685980225553!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
};

export default ContactUs;
