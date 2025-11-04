import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectionContext } from "../context/SelectionContext";

const ServiceSidebar = ({ currentCategory }) => {
  const { selections, serviceOrder } = useContext(SelectionContext);
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h3>Quotation Steps</h3>
      <ul>
        {serviceOrder.map((category) => {
          const isActive = category === currentCategory;
          const isCompleted = selections[category];

          return (
            <li
              key={category}
              className={`sidebar-item 
                ${isActive ? "active" : ""} 
                ${isCompleted && !isActive ? "completed" : ""}`}
              onClick={() => navigate(`/${category}`)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {isCompleted && <span> ✓</span>}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ServiceSidebar;
