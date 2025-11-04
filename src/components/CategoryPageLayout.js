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
    } else {
      navigate("/summary");
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      navigate(`/${serviceOrder[currentIndex - 1]}`);
    } else {
      navigate("/service-selection");
    }
  };

  return (
    <main style={styles.container}>
      {/* Sidebar */}
      <ServiceSidebar currentCategory={currentCategory} />

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1>{title} Packages</h1>

        <div style={styles.contentWrapper}>
          {/* Left: photos */}
          {photos?.length > 0 && (
            <div style={styles.photosColumn}>
              {photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo.url}
                  alt={photo.alt || `${title} sample ${idx + 1}`}
                  style={styles.photo}
                />
              ))}
            </div>
          )}

          {/* Right: package selection */}
          <div style={styles.detailsColumn}>
            {Object.entries(packages).map(([pkgTitle, features]) => {
              const isSelected = selectedPlan === pkgTitle.toLowerCase();

              return (
                <div
                  key={pkgTitle}
                  style={{
                    ...styles.package,
                    border: isSelected ? "2px solid #ff5a5f" : "1px solid #ddd",
                  }}
                  onClick={() => handlePlanSelect(pkgTitle)}
                >
                  <h2 style={{ color: isSelected ? "#ff5a5f" : "#333" }}>
                    {pkgTitle}
                  </h2>
                  <PackageCard features={features} />
                </div>
              );
            })}

            {/* Navigation Buttons */}
            <div style={styles.navigation}>
              <button onClick={handleBack} style={styles.navButton}>
                ← Back
              </button>
              <button
                onClick={handleNext}
                style={{
                  ...styles.navButton,
                  backgroundColor: selectedPlan ? "#ff5a5f" : "#ccc",
                  cursor: selectedPlan ? "pointer" : "not-allowed",
                }}
                disabled={!selectedPlan}
              >
                {currentIndex === serviceOrder.length - 1 ? "View Summary →" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    maxWidth: 1400,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Poppins', sans-serif",
  },
  mainContent: {
    flex: 1,
  },
  contentWrapper: {
    display: "flex",
    gap: 40,
  },
  photosColumn: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 15,
  },
  photo: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  detailsColumn: {
    flex: 1.2,
  },
  package: {
    marginBottom: 24,
    borderRadius: 8,
    padding: 12,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  navigation: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  navButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 6,
    backgroundColor: "#222",
    color: "#fff",
    fontWeight: "500",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default CategoryPageLayout;
