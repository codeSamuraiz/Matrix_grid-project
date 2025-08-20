import React,{useState}from "react";
import './matrix.css';

export default function Contact() {
  const rows = 6;
  const cols = 6;
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(0))
  );

  const toggleCell = (r, c) => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === r && colIndex === c ? (cell === 0 ? 1 : 0) : cell
      )
    );
    setGrid(newGrid);
  };

  return (
    <div className="grid-container">
      <h1 className="title">Matrix Grid Visualization</h1>
      <div className="grid">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              onClick={() => toggleCell(r, c)}
              className={`cell ${cell === 1 ? 'active' : ''}`}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <p className="instructions">
        Click cells to toggle them (0 → 1).
      </p>
    </div>
  );
}