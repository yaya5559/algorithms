import React from "react";

export default function MinPlatform() {

  const githubLink = "https://github.com/yaya5559/algori/tree/main/GreedyAlgo";

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Minimum Train Platforms</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Problem</h2>

        <p>
          Given the arrival and departure times of trains, determine the
          <b> minimum number of platforms</b> required so that no train has to wait.
        </p>

        <div style={styles.codeBox}>
          arr = [900, 1000] <br/>
          dep = [1000, 1100]
        </div>

        <p><b>Output</b></p>

        <div style={styles.codeBox}>
          1 platform
        </div>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Greedy Strategy</h2>

        <p>
          Always reuse the <b>earliest freed platform</b> if possible.
        </p>

        <p>
          If no platform is available when a train arrives,
          allocate a <b>new platform</b>.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Idea</h2>

        <ol>
          <li>Sort trains by arrival time</li>
          <li>Track currently occupied platforms</li>
          <li>Free platforms when trains depart</li>
          <li>Reuse platforms whenever possible</li>
        </ol>

        <p>
          We use a <b>min-heap (priority queue)</b> to keep track of the
          earliest departure time.
        </p>

        <p>
          The <b>maximum number of trains simultaneously in the heap</b>
          represents the minimum number of platforms required.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Algorithm Steps</h2>

        <ol>
          <li>Pair arrival and departure times</li>
          <li>Sort trains by arrival time</li>
          <li>Create a min-heap for departure times</li>
          <li>Remove trains that have already departed</li>
          <li>Insert the current train's departure time</li>
          <li>Track the maximum heap size</li>
        </ol>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example</h2>

        <div style={styles.codeBox}>
          arr = [900, 1000] <br/>
          dep = [1000, 1100]
        </div>

        <p>Trains</p>

        <div style={styles.codeBox}>
          (900,1000) <br/>
          (1000,1100)
        </div>

        <p>Platform usage</p>

        <div style={styles.codeBox}>
          Train 1 → platform 1 <br/>
          Train 2 arrives when train 1 leaves → reuse platform
        </div>

        <p>
          Minimum platforms required = <b>1</b>
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Time Complexity</h2>

        <p><b>O(n log n)</b></p>

        <ul>
          <li>Sorting trains → O(n log n)</li>
          <li>Heap operations → O(log n)</li>
        </ul>
      </div>


      <div style={styles.githubBox}>
        <h2 style={{marginBottom:"10px"}}>View Implementation</h2>

        <p style={{color:"#9ca3af"}}>
          Click below to view the full implementation in the GitHub repository.
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