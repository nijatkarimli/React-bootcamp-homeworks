import React, { useContext, useState } from "react";
import { EnterContext } from "../../contexts/EnterContext";

const UserInput = () => {
  const [error, setError] = useState("");

  const { setIsEntered, setPlayer1, setPlayer2, player1, player2 } = useContext(
    EnterContext
  );
  const handleSubmit = event => {
    event.preventDefault();
    setError("");
    if (player1 && player2) {
      setIsEntered(true);
    } else {
      setError("Oops, Something goes wrong! Please, enter both players' name");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>TIC TAC TOE</h2>
      <p>Please, Enter names of both Players</p>
      {error && <p>{error}</p>}
      <p>
        <input
          type="text"
          placeholder="Player1"
          onChange={event => {
            setPlayer1(event.target.value);
          }}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Player2"
          onChange={event => {
            setPlayer2(event.target.value);
          }}
        />
      </p>
      <button type="submit">START GAME</button>
    </form>
  );
};

export default UserInput;
