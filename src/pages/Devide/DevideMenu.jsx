import React from "react";
import { useNavigate } from "react-router-dom";

export default function DivideMenu() {

  const navigate = useNavigate();

  const problems = [
    {
      title: "Skyline Problem",
      description:
        "Compute the visible skyline formed by overlapping buildings using a divide and conquer merge strategy.",
      link: "/divide/skyline"
    },
    {
      title: "Merge Sort",
      description:
        "Sort an array by recursively dividing it into halves and merging the sorted subarrays.",
      link: "/divide/mergesort"
    }
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <h1 style={styles.title}>Divide & Conquer</h1>
        <p style={styles.subtitle}>
          Break a problem into smaller subproblems, solve them recursively,
          and combine the results.
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