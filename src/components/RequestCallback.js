import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../App.css";

const RequestCallback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    emailjs
      .send(
        "your_service_id", // 🔧 Replace with your EmailJS Service ID
        "your_template_id", // 🔧 Replace with your EmailJS Template ID
        formData,
        "your_public_key"   // 🔧 Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", phone: "", message: "" });
          setTimeout(() => setIsOpen(false), 1500);
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className="floating-chat-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Request a Callback"
      >
        {isOpen ? "✖" : "💬"}
      </div>

      {/* Popup Form */}
      {isOpen && (
        <div className="chat-popup">
          <h3>Request a Callback 📞</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Tell us about your event..."
              rows="3"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send</button>
          </form>

          {status && <p className="status-msg">{status}</p>}
        </div>
      )}
    </>
  );
};

export default RequestCallback;
