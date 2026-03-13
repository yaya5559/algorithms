import React from "react";
import { useNavigate } from "react-router-dom";

function GreedyMenu() {

  const navigate = useNavigate();

  const problems = [
    {
      title: "Minimum Platforms Required",
      description: "Find the minimum number of train platforms needed so no train waits.",
      link: "/greedy/minimum-platform"
    },
    {
      title: "Minimum Fibonacci Terms",
      description: "Represent a number using the minimum number of Fibonacci values.",
      link: "/greedy/min-fibonacci"
    }
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <h1 style={styles.title}>Greedy Algorithms</h1>
        <p style={styles.subtitle}>
          Choose a problem and explore the algorithm visually.
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
  }
};

export default GreedyMenu;