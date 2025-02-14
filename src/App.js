import logo from './logo.svg';
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="header">
        <a className="logo" onClick={() => navigate("")}>
          Algorithms Visualizer
        </a>
        <nav className="navbar">
          <a onClick={() => navigate("/sorting")}>Sorting Algorithms</a>
          
          {/* <a href="#">Hello3</a> */}
        </nav>
      </header>
    </div>
  );
}

export default App;
