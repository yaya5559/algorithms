import React from "react";

export default function MaxProductSubarrayPage() {

  const githubLink = "https://github.com/yaya5559/algori/tree/main/DP";

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Maximum Product Subarray</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Problem</h2>
        <p>
          Given an integer array <b>nums</b>, find a <b>contiguous subarray</b>
          that has the <b>largest product</b>, and return that product.
        </p>

        <p>
          A subarray is a contiguous non-empty sequence of elements.
          You can assume the answer fits inside a <b>32-bit integer</b>.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example 1</h2>

        <div style={styles.codeBox}>
          nums = [1,2,-3,4]
        </div>

        <p><b>Output</b></p>

        <div style={styles.codeBox}>
          4
        </div>

        <p>Possible subarrays</p>

        <div style={styles.codeBox}>
          [1] → 1 <br/>
          [1,2] → 2 <br/>
          [1,2,-3] → -6 <br/>
          [1,2,-3,4] → -24 <br/>
          [2] → 2 <br/>
          [2,-3] → -6 <br/>
          [2,-3,4] → -24 <br/>
          [-3] → -3 <br/>
          [-3,4] → -12 <br/>
          [4] → 4
        </div>

        <p>
          Maximum product = <b>4</b>
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example 2</h2>

        <div style={styles.codeBox}>
          nums = [-2,-1]
        </div>

        <p><b>Output</b></p>

        <div style={styles.codeBox}>
          2
        </div>

        <p>Subarrays</p>

        <div style={styles.codeBox}>
          [-2] → -2 <br/>
          [-2,-1] → 2 <br/>
          [-1] → -1
        </div>

        <p>
          Maximum product = <b>2</b>
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Idea</h2>

        <p>
          The challenge comes from <b>negative numbers</b>.
        </p>

        <p>
          A negative value can turn a large positive product into a negative one,
          or turn a small negative product into a large positive one.
        </p>

        <p>
          Because of this, we track two values at every step:
        </p>

        <ul>
          <li>maximum product ending at the current index</li>
          <li>minimum product ending at the current index</li>
        </ul>

        <p>
          The minimum value matters because multiplying two negatives
          can create a large positive value.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Algorithm</h2>

        <ol>
          <li>Track two values at each position:</li>
          <ul>
            <li>maxEndingHere</li>
            <li>minEndingHere</li>
          </ul>

          <li>For each number, compute:</li>

          <div style={styles.codeBox}>
            current number <br/>
            current number × previous maximum <br/>
            current number × previous minimum
          </div>

          <li>Update the global maximum product.</li>
        </ol>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Complexity</h2>

        <p><b>Time Complexity</b> : O(n)</p>
        <p>We traverse the array once.</p>

        <p><b>Space Complexity</b> : O(1)</p>
        <p>Only constant extra space is used.</p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Constraints</h2>

        <div style={styles.codeBox}>
          1 ≤ nums.length ≤ 1000
        </div>
      </div>


      <div style={styles.githubBox}>
        <h2 style={{marginBottom:"10px"}}>View Implementation</h2>

        <p style={{color:"#9ca3af"}}>
          See the full solution and implementation on GitHub.
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