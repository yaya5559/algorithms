import React from "react";

export default function MergeSort() {

  const githubLink = "https://github.com/yaya5559/algori/tree/main/DAD";

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Merge Sort</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Overview</h2>

        <p>
          Merge Sort is a classic <b>Divide & Conquer algorithm</b> used to sort arrays.
        </p>

        <p>The algorithm follows three steps:</p>

        <ol>
          <li><b>Divide</b> the array into two halves</li>
          <li><b>Conquer</b> by recursively sorting each half</li>
          <li><b>Combine</b> the halves using a merge step</li>
        </ol>

        <p>
          Merge Sort guarantees efficient performance even for large datasets.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Problem</h2>

        <p>
          Given an array of numbers, sort the array in <b>ascending order</b>.
        </p>

        <p>Example</p>

        <div style={styles.codeBox}>
          Input: [5, 12, 6, 3, 1, 55, 8]
        </div>

        <div style={styles.codeBox}>
          Output: [1, 3, 5, 6, 8, 12, 55]
        </div>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Algorithm Idea</h2>

        <p>
          Merge Sort repeatedly divides the array until each subarray contains
          only one element.
        </p>

        <p>Single elements are already sorted.</p>

        <p>The algorithm then merges the subarrays back together in sorted order.</p>

        <div style={styles.codeBox}>
{`[5, 12, 6, 3]

→ divide →

[5, 12]   [6, 3]

→ divide →

[5] [12]   [6] [3]`}
        </div>

        <div style={styles.codeBox}>
{`[5] [12] → [5,12]
[6] [3]  → [3,6]

→ final merge →

[3,5,6,12]`}
        </div>

      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Time Complexity</h2>

        <ul>
          <li>Best case → O(n log n)</li>
          <li>Average case → O(n log n)</li>
          <li>Worst case → O(n log n)</li>
        </ul>

        <p>
          Merge Sort always runs in <b>O(n log n)</b> time.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Space Complexity</h2>

        <div style={styles.codeBox}>
          O(n)
        </div>

        <p>
          Extra memory is required to store temporary arrays during merging.
        </p>
      </div>



      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example Output</h2>

        <div style={styles.codeBox}>
          [1, 3, 5, 6, 8, 8, 12, 16, 17, 23, 55, 56]
        </div>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Concepts</h2>

        <ul>
          <li>Divide & Conquer strategy</li>
          <li>Recursive algorithms</li>
          <li>Merging sorted arrays</li>
          <li>Efficient sorting techniques</li>
        </ul>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Applications</h2>

        <ul>
          <li>Large dataset sorting</li>
          <li>External sorting systems</li>
          <li>Stable sorting requirements</li>
          <li>Database systems</li>
          <li>Distributed computing</li>
        </ul>
      </div>


      <div style={styles.githubBox}>
        <h2 style={{marginBottom:"10px"}}>View Implementation</h2>

        <p style={{color:"#9ca3af"}}>
          See the full implementation in the GitHub repository.
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
    color:"#e5e7eb",
    whiteSpace:"pre-wrap"
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