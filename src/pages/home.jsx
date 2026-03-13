import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="page">

      <div className="hero">

        <h1 className="title">
          Algorithm Explorer
        </h1>


        <div className="cards">

          <Link to="/dp" className="card">
            <h2>Dynamic Programming</h2>
            <p>
              Solve complex problems using optimal substructure and memoization.
            </p>
          </Link>

          <Link to="/greedy" className="card">
            <h2>Greedy Algorithms</h2>
            <p>
              Build optimal solutions by making locally optimal choices.
            </p>
          </Link>

          <Link to="/divide" className="card">
            <h2>Divide & Conquer</h2>
            <p>
              Split problems into smaller parts, solve recursively, then merge.
            </p>
          </Link>
          <Link to="/NpProblem" className="card">
            <h2>NP Problems</h2>
            <p>
              Problems whose solutions can be verified quickly,
              but finding the solution may require exploring many possibilities.
            </p>
          </Link>

        </div>

      </div>

    </div>
  );
}