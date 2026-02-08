import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#f3eded"); // initial card color
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Safe clipboard fallback for mobile
    const tempInput = document.createElement("input");
    tempInput.value = color;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy"); // fallback
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="app">
      <div
        className="color-picker-card"
        style={{ backgroundColor: color }}
      >
        <h2>Color Picker</h2>
        <p className="instruction"><b>Tap Below and pick your color 🎨</b></p>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button
          className={`copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy Color"}
        </button>

        <p className="selected-color">
          Selected Color: <span>{color}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
