import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{ color: "#4caf50" }}
    >
      {value}
    </button>
  );
}

export default Square;