import React from "react";

function Banner({ isWinning, numOfGuesses, answer }) {
  return (
    <div className={`banner ${isWinning ? "happy" : "sad"}`}>
      {isWinning ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
