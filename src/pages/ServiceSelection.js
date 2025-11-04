// src/pages/ServiceSelection.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { serviceOrder } from "../context/SelectionContext";

const ServiceSelection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the first category
    if (serviceOrder.length > 0) {
      navigate(`/${serviceOrder[0]}`);
    }
  }, [navigate]);

  return <div>Redirecting to service selection...</div>;
};

export default ServiceSelection;
