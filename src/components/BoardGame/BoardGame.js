import React from "react";

function BoardGame({ guesses = [] }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, guessIndex) => (
        <p key={guessIndex} className="guess">
          {guess ? (
            guess.map(({ letter, status }, letterIndex) => (
              <span key={letterIndex} className={`cell ${status}`}>
                {letter}
              </span>
            ))
          ) : (
            <>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export default BoardGame;
