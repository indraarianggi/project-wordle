import React from "react";

function Input({ onSubmit, disabled }) {
  const [value, setValue] = React.useState("");

  const handleInputGuess = (event) => {
    setValue(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter exactly 5 characters"
        disabled={disabled}
        value={value}
        onChange={handleInputGuess}
      />
    </form>
  );
}

export default Input;
