import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useSelection } from "../context/SelectionContext";
import { prices } from "../data/prices"; // optional if you already have this file

function QuotationSummary() {
  const { selections, serviceOrder } = useSelection() || { selections: {}, serviceOrder: [] };

  // ✅ Build summary list (service → plan → price)
  const summaryList = serviceOrder
    .filter((category) => selections[category])
    .map((category) => {
      const plan = selections[category];
      const price = prices?.[category]?.[plan] || 0;
      return { category, plan, price };
    });

  // ✅ Calculate total
  const total = summaryList.reduce((sum, item) => sum + item.price, 0);

 // 🧾 PDF Generator
const handleDownloadPDF = () => {
  const doc = new jsPDF();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("SPG Events Quotation Summary", 14, 20);

  // Date
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);

  // Table data
  const tableData = summaryList.map((item) => [
    item.category.toUpperCase(),
    item.plan.charAt(0).toUpperCase() + item.plan.slice(1),
    `₹${item.price.toLocaleString()}`,
  ]);

  // ✅ Use autoTable function properly
  autoTable(doc, {
    head: [["Service", "Selected Plan", "Price (₹)"]],
    body: tableData,
    startY: 35,
    styles: { halign: "center" },
    headStyles: { fillColor: [255, 90, 95] },
  });

  // Total
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.setFont("helvetica", "bold");
  doc.text(`Total: ₹${total.toLocaleString()}`, 150, finalY);

  // Footer
  doc.setFontSize(10);
  doc.text(
    "Thank you for choosing SPG Events.\nContact us for any customization or queries.",
    14,
    finalY + 15
  );

  // Save File
  doc.save("SPG_Quotation.pdf");
};


  return (
    <div className="quotation-summary" style={styles.container}>
      <h2>Your Selected Packages</h2>

      {summaryList.length === 0 ? (
        <p>No packages selected yet. Please go back and choose your services.</p>
      ) : (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Selected Plan</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {summaryList.map(({ category, plan, price }) => (
                <tr key={category}>
                  <td style={styles.cell}>{category.toUpperCase()}</td>
                  <td style={styles.cell}>
                    {plan.charAt(0).toUpperCase() + plan.slice(1)}
                  </td>
                  <td style={styles.cell}>₹{price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={styles.total}>Total: ₹{total.toLocaleString()}</h3>

          <div style={styles.buttonContainer}>
            <button onClick={handleDownloadPDF} style={styles.downloadBtn}>
              Download PDF
            </button>
            <button onClick={() => alert("Email feature coming soon!")} style={styles.emailBtn}>
              Send via Email
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: "40px auto",
    padding: "30px",
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
    marginBottom: 20,
  },
  cell: {
    borderBottom: "1px solid #eee",
    padding: "10px 0",
    textAlign: "center",
  },
  total: {
    textAlign: "right",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  buttonContainer: {
    marginTop: 20,
    display: "flex",
    gap: "15px",
  },
  downloadBtn: {
    backgroundColor: "#ff5a5f",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "500",
  },
  emailBtn: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default QuotationSummary;
