import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectionContext } from "../context/SelectionContext";
import PackageCard from "./PackageCard";
import ServiceSidebar from "./ServiceSidebar";

const CategoryPageLayout = ({ title, currentCategory, packages, photos }) => {
  const { selections, updateSelection, serviceOrder } = useContext(SelectionContext);
  const navigate = useNavigate();

  const selectedPlan = selections[currentCategory];
  const currentIndex = serviceOrder.indexOf(currentCategory);

  const handlePlanSelect = (planTitle) => {
    updateSelection(currentCategory, planTitle.toLowerCase());
  };

  const handleNext = () => {
    if (currentIndex < serviceOrder.length - 1) {
      navigate(`/${serviceOrder[currentIndex + 1]}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/summary");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      navigate(`/${serviceOrder[currentIndex - 1]}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/service-selection");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="category-container">
      {/* Sidebar */}
      <ServiceSidebar currentCategory={currentCategory} />

      {/* Main Content */}
      <div className="main-content">
        <h1>{title} Packages</h1>

        <div className="category-container">
          {/* Left: Photos */}
          {photos?.length > 0 && (
            <div className="photos-column">
              {photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo.url}
                  alt={photo.alt || `${title} sample ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Right: Package Selection */}
          {/* ✅ this div must have className="details-column" */}
    <div className="details-column">
      {Object.entries(packages).map(([pkgTitle, features]) => {
        const isSelected = selectedPlan === pkgTitle.toLowerCase();
        return (
          <div
            key={pkgTitle}
            className={`package-card ${isSelected ? "selected" : ""}`}
            onClick={() => handlePlanSelect(pkgTitle)}
          >
            <h2>{pkgTitle}</h2>
            <PackageCard features={features} />
          </div>
        );
      })}

      <div className="navigation">
        <button onClick={handleBack}>← Back</button>
        <button
          onClick={handleNext}
          disabled={!selectedPlan}
          style={{
            backgroundColor: selectedPlan ? "#ff5a5f" : "#ccc",
            cursor: selectedPlan ? "pointer" : "not-allowed",
          }}
        >
          {currentIndex === serviceOrder.length - 1
            ? "View Summary →"
            : "Next →"}
        </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryPageLayout;
