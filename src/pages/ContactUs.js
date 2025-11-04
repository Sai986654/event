import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting SPG Events — we’ll get back to you soon!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main style={styles.container}>
      <section style={styles.card}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.text}>
          Have a question, or want a personalized quotation?  
          Fill out the form below and our team will reach out within 24 hours.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
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
    maxWidth: 600,
    width: "100%",
    background: "#fff",
    borderRadius: 12,
    padding: "40px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#ff5a5f",
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 25,
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    padding: "12px 15px",
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  textarea: {
    padding: "12px 15px",
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: "1rem",
    minHeight: 100,
  },
  button: {
    backgroundColor: "#ff5a5f",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "12px 20px",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default ContactUs;
