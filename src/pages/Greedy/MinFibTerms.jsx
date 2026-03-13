import React from "react";

export default function MinFibTerms() {

  const githubLink = "https://github.com/yaya5559/algori/tree/main/greedyalgo2";

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Minimum Fibonacci Terms</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Problem</h2>

        <p>
          Given a positive integer <b>k</b>, find the <b>minimum number of
          Fibonacci numbers</b> whose sum equals <b>k</b>.
        </p>

        <div style={styles.codeBox}>
          k = 7
        </div>

        <p>One valid representation</p>

        <div style={styles.codeBox}>
          7 = 5 + 2
        </div>

        <p>
          Minimum number of Fibonacci numbers = <b>2</b>
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Greedy Strategy</h2>

        <p>
          Always subtract the <b>largest Fibonacci number less than or equal to k</b>.
        </p>

        <p>
          Repeat this process until the remaining value becomes <b>0</b>.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why the Greedy Strategy Works</h2>

        <p>
          This works because of <b>Zeckendorf’s Theorem</b>.
        </p>

        <div style={styles.codeBox}>
          Every positive integer can be written uniquely
          as the sum of non-consecutive Fibonacci numbers.
        </div>

        <p>
          Because of this theorem, choosing the largest Fibonacci number
          at each step always leads to the optimal solution.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Algorithm Steps</h2>

        <ol>
          <li>Generate Fibonacci numbers ≤ k</li>
          <li>Start from the largest Fibonacci number</li>
          <li>Subtract it from k</li>
          <li>Repeat until k = 0</li>
          <li>Count how many numbers were used</li>
        </ol>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example</h2>

        <div style={styles.codeBox}>
          k = 7
        </div>

        <p>Fibonacci numbers ≤ 7</p>

        <div style={styles.codeBox}>
          1, 1, 2, 3, 5
        </div>

        <p>Greedy steps</p>

        <div style={styles.codeBox}>
          7 - 5 = 2 <br/>
          2 - 2 = 0
        </div>

        <p>
          Minimum number of terms = <b>2</b>
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Time Complexity</h2>

        <p><b>O(log k)</b></p>

        <p>
          The number of Fibonacci numbers less than k grows logarithmically.
        </p>
      </div>


      <div style={styles.githubBox}>
        <h2 style={{marginBottom:"10px"}}>View Implementation</h2>

        <p style={{color:"#9ca3af"}}>
          Click below to view the full solution in the GitHub repository.
        </p>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          style={styles.githubButton}
        >
          View Code on GitHub
        </a>
      </div>

    </div>
  );
}


const styles = {

  container:{
    maxWidth:"900px",
    margin:"auto",
    padding:"60px 30px",
    color:"#ffffff",
    fontFamily:"Inter, sans-serif"
  },

  title:{
    fontSize:"40px",
    fontWeight:"700",
    marginBottom:"40px"
  },

  section:{
    marginBottom:"40px"
  },

  sectionTitle:{
    fontSize:"22px",
    marginBottom:"15px"
  },

  codeBox:{
    background:"#111827",
    border:"1px solid #1f2937",
    padding:"16px",
    borderRadius:"8px",
    marginTop:"10px",
    marginBottom:"15px",
    fontFamily:"monospace",
    color:"#e5e7eb"
  },

  githubBox:{
    marginTop:"60px",
    padding:"40px",
    borderRadius:"16px",
    background:"#111827",
    border:"1px solid #1f2937",
    textAlign:"center"
  },

  githubButton:{
    display:"inline-block",
    marginTop:"15px",
    padding:"12px 24px",
    background:"#2563eb",
    borderRadius:"8px",
    color:"#fff",
    textDecoration:"none",
    fontWeight:"500"
  }

};