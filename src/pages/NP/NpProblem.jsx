import React from "react";

export default function NpProblem() {

  const githubLink = "https://github.com/your-repo/vertex-cover-proof";

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Vertex Cover — NP-Complete</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Problem</h2>

        <p>
          Given a graph <b>G(V, E)</b> and an integer <b>k</b>, determine whether
          there exists a subset of vertices <b>V′ ⊆ V</b> such that:
        </p>

        <ul>
          <li>|V′| ≤ k</li>
          <li>Every edge in the graph touches at least one vertex in V′</li>
        </ul>

        <p>
          Such a set <b>V′</b> is called a <b>vertex cover</b>.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Understanding the Problem</h2>

        <p>
          An <b>instance</b> of the Vertex Cover problem consists of:
        </p>

        <ul>
          <li>a graph <b>G(V,E)</b></li>
          <li>a positive integer <b>k</b></li>
        </ul>

        <p>
          The goal is to check whether it is possible to select
          <b> at most k vertices</b> that cover every edge in the graph.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Vertex Cover is NP-Complete</h2>

        <p>
          To prove that Vertex Cover is <b>NP-Complete</b>, we must show two things:
        </p>

        <ol>
          <li>Vertex Cover is in NP</li>
          <li>Vertex Cover is NP-Hard</li>
        </ol>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Part 1 — Vertex Cover is in NP</h2>

        <p>
          A problem is in NP if we can verify a proposed solution
          in <b>polynomial time</b>.
        </p>

        <p>
          For Vertex Cover, the certificate is the subset of vertices <b>V′</b>.
        </p>

        <p>We verify it using the following idea:</p>

        <div style={styles.codeBox}>
{`count = 0

for each vertex v in V′
    remove all edges incident to v
    count = count + 1

if count ≤ k and no edges remain
    accept
else
    reject`}
        </div>

        <p>
          This verification only requires checking edges in the graph,
          which takes polynomial time.
        </p>

        <p>
          Therefore <b>Vertex Cover ∈ NP</b>.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Part 2 — Vertex Cover is NP-Hard</h2>

        <p>
          To prove NP-Hardness, we reduce a known NP-Complete problem
          to Vertex Cover.
        </p>

        <p>We use the <b>Clique Problem</b>.</p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Clique Problem</h2>

        <p>
          A <b>clique</b> is a set of vertices where every pair of vertices
          is connected by an edge.
        </p>

        <p>The Clique Problem asks:</p>

        <div style={styles.codeBox}>
          Does graph G contain a clique of size k?
        </div>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Reduction Idea</h2>

        <p>
          Given a graph <b>G(V,E)</b>, construct the <b>complement graph G′</b>.
        </p>

        <p>
          In the complement graph, edges exist exactly where they did
          <b> not exist</b> in the original graph.
        </p>

        <div style={styles.codeBox}>
          G has clique size k ⇔ G′ has vertex cover size |V| − k
        </div>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Forward Direction</h2>

        <p>
          Suppose graph G contains a clique of size k.
        </p>

        <p>
          Let V′ be the vertices forming that clique.
        </p>

        <p>
          In the complement graph G′, those edges do not exist,
          meaning all edges must be covered by vertices in V − V′.
        </p>

        <p>
          Therefore <b>V − V′</b> forms a vertex cover of size <b>|V| − k</b>.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Reverse Direction</h2>

        <p>
          Suppose G′ contains a vertex cover of size <b>|V| − k</b>.
        </p>

        <p>
          The remaining <b>k vertices</b> cannot have edges between them
          in G′.
        </p>

        <p>
          Therefore those edges must exist in G, meaning those vertices
          form a <b>clique of size k</b>.
        </p>
      </div>


      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Conclusion</h2>

        <ul>
          <li>Vertex Cover can be verified in polynomial time → NP</li>
          <li>Clique reduces to Vertex Cover → NP-Hard</li>
        </ul>

        <div style={styles.codeBox}>
          Vertex Cover is NP-Complete
        </div>
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