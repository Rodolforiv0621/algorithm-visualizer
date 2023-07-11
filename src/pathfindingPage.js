import React from "react";
import { useNavigate } from "react-router-dom";

function PathfindingPage() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <a className="logo" onClick={() => navigate("/")}>
          Algorithms Visualizer
        </a>
        <nav className="navbar">
          <a onClick={() => navigate("/sorting")}>Sorting Algorithms</a>
          <a onClick={() => navigate("/pathfinding")}>Pathfinding Algorithms</a>
        </nav>
      </header>
      <div>PathfindingPage</div>
    </>
  );
}

export default PathfindingPage;
