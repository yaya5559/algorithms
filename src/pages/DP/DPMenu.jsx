import React from "react";
import { useNavigate } from "react-router-dom";

export default function DPMenu() {

  const navigate = useNavigate();

  const problems = [
    {
      title: "Maximum Product Subarray",
      description:
        "Find the contiguous subarray within an integer array that has the largest product.",
      link: "/dynamic/max-product-subarray"
    },
    {
      title: "Word Break",
      description:
        "Determine if a string can be segmented into a sequence of dictionary words using dynamic programming.",
      link: "/dynamic/word-break"
    }
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <h1 style={styles.title}>Dynamic Programming</h1>
        <p style={styles.subtitle}>
          Solve complex problems by storing solutions to overlapping
          subproblems and reusing them efficiently.
        </p>
      </div>

      <div style={styles.grid}>
        {problems.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onClick={() => navigate(p.link)}
          >
            <h2 style={styles.cardTitle}>{p.title}</h2>
            <p style={styles.cardDescription}>{p.description}</p>
            <span style={styles.cardAction}>Explore →</span>
          </div>
        ))}
      </div>

      <div style={styles.backWrapper}>
        <button
          style={styles.backButton}
          onClick={() => navigate("/")}
        >
          ← Back to Algorithms
        </button>
      </div>

    </div>
  );
}

const styles = {

  container: {
    padding: "60px 30px",
    maxWidth: "1000px",
    margin: "auto",
    color: "#ffffff",
    fontFamily: "Inter, sans-serif"
  },

  header: {
    marginBottom: "40px"
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#9ca3af",
    fontSize: "16px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "#111827",
    borderRadius: "16px",
    padding: "30px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    border: "1px solid #1f2937",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px"
  },

  cardDescription: {
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "20px"
  },

  cardAction: {
    color: "#60a5fa",
    fontWeight: "500"
  },

  backWrapper: {
    marginTop: "40px"
  },

  backButton: {
    background: "transparent",
    border: "1px solid #374151",
    padding: "10px 16px",
    borderRadius: "8px",
    color: "#9ca3af",
    cursor: "pointer"
  }

};
