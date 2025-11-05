import React, { useState, useEffect } from "react";
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

  // ✅ Collapse state persisted in localStorage
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("summaryCollapsed");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("summaryCollapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  if (!hasSelections) return null;

  return (
    <aside className={`live-summary-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h3>Your Quotation Summary</h3>
        <button
          className="collapse-btn"
          onClick={() => setCollapsed((prev) => !prev)}
          title={collapsed ? "Expand Summary" : "Minimize Summary"}
        >
          {collapsed ? "▲" : "▼"}
        </button>
      </div>

      {/* Only render details when expanded */}
      {collapsed ? (
        <div className="summary-total compact">
          <strong>Total:</strong> ₹{total}
        </div>
      ) : (
        <>
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
        </>
      )}
    </aside>
  );
};

export default LiveSummarySidebar;
