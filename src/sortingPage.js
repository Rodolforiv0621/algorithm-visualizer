import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { bubbleSort } from "./algorithms/bubbleSort";
import { insertionSort } from "./algorithms/insertionSort";
import { quickSort } from "./algorithms/quickSort";

function SortingPage() {
  const navigate = useNavigate();
  const [lines, setLines] = useState([]);
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(true);
  function updateCount() {
    setCount((prevCount) => prevCount + 1);
  }
  useEffect(() => {
    resetArray();
  }, []);
  function resetArray(length) {
    const arr = [];
    let i;
    for (i = 0; i < 20; i++) {
      arr.push(Math.floor(Math.random() * (350 - 5) + 5));
      if (lines[i] != null) {
        document.getElementById(i).style.backgroundColor =
          "rgba(255, 255, 255, 0.87)";
      }
    }
    setCount(0);
    setLines(arr);
  }
  function getWidth() {
    let x = lines.length;
    if (x < 10) {
      return 30;
    } else if (x < 30) {
      return 20;
    } else if (x < 40) {
      return 10;
    } else if (x < 60) {
      return 5;
    } else {
      return 3;
    }
  }
  async function bubble() {
    if(!ready) return;
    setCount(0);
    setReady(false);
    await bubbleSort(lines, updateCount);
    setReady(true)
  }
  async function insertion() {
    if (!ready) return;
    setCount(0);
    setReady(false);
    await insertionSort(lines, updateCount);
    setReady(true);
  }

  async function quick(){
    if(!ready) return;
    setCount(0);
    setReady(false)
    await quickSort(lines, 0, lines.length-1, updateCount)
    setReady(true)
  }
  return (
    <>
      <div className="container">
        <header className="header">
          <a className="logo" onClick={() => navigate("/")}>
            Algorithms Visualizer
          </a>
          <nav className="navbar">
            <a onClick={() => navigate("/sorting")}>Sorting Algorithms</a>
          </nav>
        </header>

        {lines.length > 0 &&
          lines.map((line, idx) => (
            <div
              key={idx}
              id={idx++}
              className="line"
              style={{
                height: `${line * 1.3 + 30}px`,
                padding: `0px ${getWidth()}px`,
              }}
            ></div>
          ))}

        <button className="bubble" onClick={bubble}>
          Bubble Sort
        </button>
        <button onClick={insertion}>Insertion Sort</button>
        <button onClick={quick}>Quick Sort</button>
        <button onClick={resetArray}>Generate Random Array</button>
        
        <div className="data">
          <div className="count"># of Swaps: {count}</div>
        </div>
      </div>
    </>
  );
}

export default SortingPage;
