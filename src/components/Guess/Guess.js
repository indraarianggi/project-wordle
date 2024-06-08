import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${guess?.[num]?.status ?? ""}`}>
          {guess?.[num]?.letter ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
