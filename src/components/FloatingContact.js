import React from "react";
import { Phone, MessageCircle } from "lucide-react"; // using lucide-react icons
import "../App.css";

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a
        href="https://wa.me/919876543210"
        className="float-btn whatsapp"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <a
        href="tel:+919876543210"
        className="float-btn call"
        title="Call Us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
