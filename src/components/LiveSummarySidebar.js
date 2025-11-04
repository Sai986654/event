import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";
import "../App.css";

const LiveSummarySidebar = () => {
  const { selections } = useSelection();
  const navigate = useNavigate();

  const hasSelections = selections && Object.keys(selections).length > 0;
  const total = hasSelections
    ? Object.values(selections).reduce((acc, svc) => acc + (svc?.price || 0), 0)
    : 0;

  if (!hasSelections) return null; // Hide when no selections made

  return (
    <aside className="live-summary-sidebar">
      <h3>Your Quotation Summary</h3>

      <ul>
        {Object.entries(selections).map(([key, value]) => (
          <li key={key} className="summary-item">
            <span className="summary-category">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
            <span className="summary-plan">{value?.name}</span>
            <span className="summary-price">₹{value?.price}</span>
          </li>
        ))}
      </ul>

      <div className="summary-total">
        <strong>Total:</strong> ₹{total}
      </div>

      <button
        className="view-summary-btn"
        onClick={() => navigate("/summary")}
      >
        View Full Quotation →
      </button>
    </aside>
  );
};

export default LiveSummarySidebar;
