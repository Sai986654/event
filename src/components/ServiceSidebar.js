import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectionContext } from "../context/SelectionContext";

const ServiceSidebar = ({ currentCategory }) => {
  const { selections, serviceOrder } = useContext(SelectionContext);
  const navigate = useNavigate();

  return (
    <aside style={styles.sidebar}>
      <h3 style={styles.title}>Quotation Steps</h3>
      <ul style={styles.list}>
        {serviceOrder.map((category) => {
          const isActive = category === currentCategory;
          const isCompleted = selections[category];
          return (
            <li
              key={category}
              style={{
                ...styles.item,
                backgroundColor: isActive ? "#ff5a5f" : "transparent",
                color: isActive ? "#fff" : "#333",
                fontWeight: isActive ? "bold" : "normal",
                borderLeft: isCompleted ? "4px solid #4CAF50" : "4px solid transparent",
              }}
              onClick={() => navigate(`/${category}`)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {isCompleted && <span style={styles.check}> ✓</span>}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    height: "fit-content",
  },
  title: {
    fontSize: "1.1rem",
    marginBottom: "10px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "5px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  check: {
    marginLeft: "8px",
    color: "#4CAF50",
  },
};

export default ServiceSidebar;
