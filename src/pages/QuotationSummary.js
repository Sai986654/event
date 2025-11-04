import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // for table formatting
import { useSelection } from "../context/SelectionContext";
import {prices} from "../data/prices";
import "../App.css";

const QuotationSummary = () => {
  const { selections, resetSelections } = useSelection();

  // If no selections made
  const hasSelections = selections && Object.keys(selections).length > 0;
  const total = hasSelections
    ? Object.values(selections).reduce(
        (acc, svc) => acc + (svc?.price || 0),
        0
      )
    : 0;

  // ✅ Generate PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("SPG Events — Quotation Summary", 14, 20);
    doc.setFontSize(12);
    doc.text("Thank you for planning your event with us!", 14, 30);

    const tableData = Object.entries(selections).map(([key, value]) => [
      key.charAt(0).toUpperCase() + key.slice(1),
      value?.name || "N/A",
      `₹${value?.price || 0}`,
    ]);

    autoTable(doc, {
      head: [["Category", "Selected Package", "Price"]],
      body: tableData,
      startY: 40,
    });

    doc.text(`Total: ₹${total}`, 14, doc.lastAutoTable.finalY + 15);
    doc.save("SPG_Quotation.pdf");
  };

  return (
    <main className="summary-page">
      <section className="summary-container">
        <h1>Quotation Summary 🧾</h1>

        {!hasSelections ? (
          <p className="no-selection">
            No packages selected yet. Please go back and choose your services.
          </p>
        ) : (
          <>
            <table className="summary-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Package</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selections).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                    <td>{value?.name}</td>
                    <td>₹{value?.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="total-label">
                    Total
                  </td>
                  <td className="total-value">₹{total}</td>
                </tr>
              </tfoot>
            </table>

            <div className="summary-buttons">
              <button onClick={handleDownloadPDF}>📄 Download PDF</button>
              <button
                onClick={() =>
                  alert("Email feature coming soon! ✉️ (Backend Integration)")
                }
              >
                ✉️ Send via Email
              </button>
              <button
                onClick={() => {
                  resetSelections();
                  alert("Selections cleared. You can start a new quotation!");
                }}
              >
                🔄 Start New
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default QuotationSummary;
