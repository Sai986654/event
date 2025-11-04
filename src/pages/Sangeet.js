import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import { SelectionContext } from "../context/SelectionContext";

const sangeetPackages = {
  Basic: [
    "Sound & light for 50 guests",
    "Stage décor",
    "2-hour DJ/music",
  ],
  Premium: [
    "Extended sound/light for 100 guests",
    "4hr professional DJ/Band",
    "Elegant stage décor",
  ],
  Elite: [
    "Designer stage décor with effects",
    "Celebrity performer",
    "Unlimited hours",
  ],
};


const Sangeet = () => {
  const { selections, updateSelection,serviceOrder } = useContext(SelectionContext);
  const navigate = useNavigate();

  const currentCategory = "sangeet";
  const selectedPlan = selections[currentCategory];
  const currentIndex = serviceOrder.indexOf(currentCategory);

  const handlePlanSelect = (planTitle) => {
    updateSelection(currentCategory, planTitle.toLowerCase());
  };

  const handleNext = () => {
    if (currentIndex < serviceOrder.length - 1) {
      const nextCategory = serviceOrder[currentIndex + 1];
      navigate(`/${nextCategory}`);
    } else {
      navigate("/summary");
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevCategory = serviceOrder[currentIndex - 1];
      navigate(`/${prevCategory}`);
    } else {
      navigate("/service-selection");
    }
  };

  return (
    <main style={styles.container}>
      <h1>Sangeet Packages</h1>

      {Object.entries(sangeetPackages).map(([title, features]) => {
        const isSelected = selectedPlan === title.toLowerCase();

        return (
          <div
            key={title}
            style={{
              ...styles.package,
              border: isSelected ? "2px solid #ff5a5f" : "1px solid #ddd",
            }}
            onClick={() => handlePlanSelect(title)}
          >
            <h2 style={{ color: isSelected ? "#ff5a5f" : "#333" }}>{title}</h2>
            <PackageCard features={features} />
          </div>
        );
      })}

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
    </main>
  );
};

const styles = {
  container: {
    maxWidth: 900,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Poppins', sans-serif",
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

export default Sangeet;
