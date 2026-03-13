import React from "react";

export default function WordBreakPage() {

  const githubLink = "https://github.com/yaya5559/algori/tree/main/DP1";

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Word Break</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Problem</h2>
        <p>
          Given a string <b>s</b> and a dictionary of strings <b>wordDict</b>,
          return <b>true</b> if the string can be segmented into a
          <b> space-separated sequence of dictionary words</b>.
        </p>
        <p>
          Words in the dictionary may be reused an <b>unlimited number of times</b>.
          All dictionary words are <b>unique</b>.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example 1</h2>

        <div style={styles.codeBox}>
          s = "VIVAMorocco" <br />
          wordDict = ["VIVA","Morocco"]
        </div>

        <p><b>Output</b></p>

        <div style={styles.codeBox}>true</div>

        <p>
          "VIVAMorocco" can be split into:
        </p>

        <div style={styles.codeBox}>VIVA + Morcocco</div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Example 2</h2>

        <div style={styles.codeBox}>
          s = "Algorithmisbestsubject" <br />
          wordDict = ["Algorithm","is","bestSubject","in theworld"]
        </div>

        <p><b>Output</b></p>

        <div style={styles.codeBox}>true</div>

        <p>
          "Algorithmisbestsubject" can be split into:
        </p>

        <div style={styles.codeBox}>
          Algorithm + is + best + subject
        </div>

        <p>
          Words can be reused and not all dictionary words must be used.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Idea</h2>
        <p>
          This problem is solved using <b>Dynamic Programming</b>.
          We determine whether prefixes of the string can be formed using dictionary words.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>DP Definition</h2>

        <div style={styles.codeBox}>
          dp[i] = true if substring s[0:i] can be segmented
        </div>

        <p>
          The final answer is whether <b>dp[n]</b> is true,
          where <b>n</b> is the length of the string.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Recurrence</h2>

        <div style={styles.codeBox}>
          if dp[j] = true and s[j:i] ∈ dictionary  
          then dp[i] = true
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Algorithm</h2>

        <ol>
          <li>Convert dictionary into a set.</li>
          <li>Create DP array of size n + 1.</li>
          <li>Set dp[0] = true.</li>
          <li>For each position i from 1 → n</li>
          <li>Check all previous splits j</li>
          <li>If dp[j] and substring exists → dp[i] = true</li>
        </ol>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Complexity</h2>

        <p><b>Time Complexity:</b> O(n²)</p>
        <p><b>Space Complexity:</b> O(n)</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Category</h2>
        <div style={styles.tag}>Dynamic Programming</div>
      </div>

      <div style={styles.githubBox}>
        <h2 style={{marginBottom: "10px"}}>View Implementation</h2>
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

  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "60px 30px",
    color: "#ffffff",
    fontFamily: "Inter, sans-serif"
  },

  title: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "40px"
  },

  section: {
    marginBottom: "40px"
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "15px"
  },

  codeBox: {
    background: "#111827",
    border: "1px solid #1f2937",
    padding: "16px",
    borderRadius: "8px",
    marginTop: "10px",
    marginBottom: "15px",
    fontFamily: "monospace",
    color: "#e5e7eb"
  },

  tag: {
    display: "inline-block",
    background: "#1f2937",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "14px"
  },

  githubBox: {
    marginTop: "60px",
    padding: "40px",
    borderRadius: "16px",
    background: "#111827",
    border: "1px solid #1f2937",
    textAlign: "center"
  },

  githubButton: {
    display: "inline-block",
    marginTop: "15px",
    padding: "12px 24px",
    background: "#2563eb",
    borderRadius: "8px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500"
  }

};