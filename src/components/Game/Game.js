import React from 'react';

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import BoardGame from "../BoardGame";
import Input from "../Input";
import { checkGuess, checkWinningStatus } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [isWinning, setIsWinning] = React.useState();
  const [guesses, setGuesses] = React.useState(() => {
    const guessSlots = range(0, NUM_OF_GUESSES_ALLOWED).map(() => undefined);
    return guessSlots;
  });
  const [numOfInputGuesses, setNumOfInputGuesses] = React.useState(0);

  const handleSubmit = (newGuess) => {
    if (numOfInputGuesses >= NUM_OF_GUESSES_ALLOWED) return;

    const nextNumOfInputGuesses = numOfInputGuesses + 1;

    const newGuessCheckResult = checkGuess(newGuess, answer);
    const nextGuesses = [...guesses];
    nextGuesses[numOfInputGuesses] = newGuessCheckResult;

    const winningStatus = checkWinningStatus(newGuessCheckResult);

    if (winningStatus) {
      setIsWinning(winningStatus);
    } else if (nextNumOfInputGuesses === NUM_OF_GUESSES_ALLOWED) {
      setIsWinning(false);
    }

    setGuesses(nextGuesses);
    setNumOfInputGuesses(nextNumOfInputGuesses);
  };

  return (
    <>
      <BoardGame guesses={guesses} />
      <Input onSubmit={handleSubmit} disabled={isWinning !== undefined} />
      {isWinning !== undefined && (
        <Banner
          isWinning={isWinning}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
