import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";
import PackageCard from "./PackageCard";
import ServiceSidebar from "./ServiceSidebar";
import { servicePrices } from "../data/prices";
import LiveSummarySidebar from "./LiveSummarySidebar";

const CategoryPageLayout = ({ title, currentCategory, packages, photos }) => {
  const { selections, updateSelection, serviceOrder } = useSelection();
  const navigate = useNavigate();

  const selectedPlan = selections[currentCategory]?.name?.toLowerCase();
  const currentIndex = serviceOrder.indexOf(currentCategory);

  // ✅ Dynamically use the current category for price lookup
  const handlePlanSelect = (planKey) => {
    const categoryPrices = servicePrices[currentCategory];
    if (!categoryPrices) {
      console.warn(`No price data found for category: ${currentCategory}`);
      return;
    }

    const planName = planKey.charAt(0).toUpperCase() + planKey.slice(1);
    const planPrice = categoryPrices[planKey.toLowerCase()] || 0;

    updateSelection(currentCategory, {
      name: planName,
      price: planPrice,
    });
  };

  // ✅ Move to next category or summary
  const handleNext = () => {
    if (currentIndex < serviceOrder.length - 1) {
      navigate(`/${serviceOrder[currentIndex + 1]}`);
    } else {
      navigate("/summary");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Move back to previous category
  const handleBack = () => {
    if (currentIndex > 0) {
      navigate(`/${serviceOrder[currentIndex - 1]}`);
    } else {
      navigate("/service-selection");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="category-container">
      {/* Sidebar (left panel with steps) */}
      <aside className="sidebar-column">
        <ServiceSidebar currentCategory={currentCategory} />
        <LiveSummarySidebar /> {/* 👈 Moved here below quotation steps */}
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        <h1>{title} Packages</h1>

        <div className="category-layout">
          {/* Left: Photos */}
          {photos?.length > 0 && (
            <div className="photos-column">
              {photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo.url}
                  alt={photo.alt || `${title} sample ${idx + 1}`}
                  className="package-photo"
                />
              ))}
            </div>
          )}

          {/* Right: Package Selection */}
          <div className="details-column">
            {Object.entries(packages).map(([pkgTitle, features]) => {
              const isSelected =
                selectedPlan === pkgTitle.toLowerCase();

              const price =
                servicePrices[currentCategory]?.[pkgTitle.toLowerCase()] || 0;

              return (
                <div
                  key={pkgTitle}
                  className={`package-card ${isSelected ? "selected" : ""}`}
                  onClick={() => handlePlanSelect(pkgTitle.toLowerCase())}
                >
                  <h2>{pkgTitle}</h2>
                  <p className="package-price">₹{price}</p>
                  <PackageCard features={features} />
                </div>
              );
            })}

            {/* Navigation Buttons */}
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
