import React from "react";

export default function SkylinePage() {

  const githubLink = "https://github.com/yaya5559/algori/tree/main/DevideAndConcquer";

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Skyline Problem</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Overview</h2>

        <p>
          The <b>Skyline Problem</b> is a classic computational geometry problem.
          Given a list of rectangular buildings in a city skyline, the goal is
          to compute the <b>visible outline of the city</b> when viewed from a distance.
        </p>

        <p>
          Buildings may overlap, and hidden portions should not appear in the
          final skyline. This implementation uses a <b>Divide & Conquer algorithm</b>
          to recursively split buildings and merge skylines.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Problem Description</h2>

        <p>Each building is represented as a triplet:</p>

        <div style={styles.codeBox}>
          (left, right, height)
        </div>

        <ul>
          <li><b>left</b> → x-coordinate where the building starts</li>
          <li><b>right</b> → x-coordinate where the building ends</li>
          <li><b>height</b> → building height</li>
        </ul>

        <p>All buildings share the same ground level.</p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Skyline Representation</h2>

        <p>
          The skyline is represented as a list of <b>key points</b>.
        </p>

        <div style={styles.codeBox}>
          (x, height)
        </div>

        <p>
          Each point represents a position where the skyline height changes.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example</h2>

        <p>Input</p>

        <div style={styles.codeBox}>
{`buildings = [
[1,5,11],
[2,7,6],
[3,9,13],
[12,16,7],
[14,25,3],
[19,22,18],
[23,29,13],
[24,28,4]
]`}
        </div>

        <p>Output skyline</p>

        <div style={styles.codeBox}>
{`[
[1,11],
[3,13],
[9,0],
[12,7],
[16,3],
[19,18],
[22,3],
[23,13],
[29,0]
]`}
        </div>

        <p>
          The skyline consists of points where the visible height changes.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Observations</h2>

        <ul>
          <li>Hidden parts of buildings are removed.</li>
          <li>Completely covered buildings do not appear.</li>
          <li>Only height changes are recorded.</li>
        </ul>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Divide & Conquer Approach</h2>

        <ol>
          <li><b>Divide</b> buildings into two halves</li>
          <li><b>Conquer</b> by computing skyline for each half</li>
          <li><b>Merge</b> the two skylines</li>
        </ol>

        <div style={styles.codeBox}>
{`leftBuildings
rightBuildings

leftSkyline
rightSkyline`}
        </div>

      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Algorithm Outline</h2>

        <div style={styles.codeBox}>
{`Skyline(buildings):

    if one building:
        return its skyline

    divide buildings into two halves

    leftSkyline = Skyline(left half)
    rightSkyline = Skyline(right half)

    return merge(leftSkyline, rightSkyline)`}
        </div>

        <p>
          The merge step compares heights from both skylines and outputs
          the visible maximum height.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Time Complexity</h2>

        <ul>
          <li>Divide → log n recursion levels</li>
          <li>Merge → O(n) work per level</li>
        </ul>

        <div style={styles.codeBox}>
          O(n log n)
        </div>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Applications</h2>

        <ul>
          <li>City skyline rendering</li>
          <li>Computational geometry</li>
          <li>Urban modeling</li>
          <li>Graphical visualization</li>
          <li>Architectural simulation</li>
        </ul>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Concepts</h2>

        <ul>
          <li>Divide & Conquer</li>
          <li>Recursive decomposition</li>
          <li>Merging sorted structures</li>
          <li>Computational geometry</li>
        </ul>
      </div>


      <div style={styles.githubBox}>
        <h2 style={{marginBottom:"10px"}}>View Implementation</h2>

        <p style={{color:"#9ca3af"}}>
          See the full Divide & Conquer implementation in the GitHub repository.
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

      <div style={{marginTop:"40px", color:"#9ca3af", textAlign:"center"}}>
        Author: Yahya Ouchchen
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