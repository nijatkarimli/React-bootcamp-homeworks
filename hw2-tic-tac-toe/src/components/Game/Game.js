import React, { useState, useEffect, useContext } from "react";

import Board from "../Board/Board";
import IntroDashboard from "../IntroDashboard/IntroDashboard";
import { GameContext } from "../../contexts/GameContext";
import { EnterContext } from "../../contexts/EnterContext";
import "./Game.css";

const Game = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [boardArray, setBoardArray] = useState(Array(9).fill(null));
  const [clickCount, setClickCount] = useState(0);
  const [turn, setTurn] = useState(true);
  const [endMessage, setEndMessage] = useState("");
  const [winner, setWinner] = useState(null);

  const { player1, player2 } = useContext(EnterContext);

  const checkWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const handleClick = squareID => {
    if (!boardArray[squareID] && !winner) {
      boardArray[squareID] = turn ? "X" : "O";
      setBoardArray([...boardArray]);
      setTurn(!turn);
      let end = checkWinner([...boardArray]);
      if (end === "X") {
        end = player1;
        setScore1(prevScore => prevScore + 1);
      } else if (end === "O") {
        end = player2;
        setScore2(prevScore => prevScore + 1);
      }
      if (end) {
        setWinner(end);
      }
      setClickCount(prevClickCount => prevClickCount + 1);
      if (clickCount === 8) {
        setEndMessage("Game ended. Nobody won. Please, begin new game");
      }
    }
  };

  useEffect(() => {
    if (winner) {
      setEndMessage(`Game ended! Winner is ${winner}`);
    }
  }, [winner]);

  const handleNewGame = inp => {
    setBoardArray(Array(9).fill(null));
    setTurn(true);
    setEndMessage("");
    setWinner(null);
    setClickCount(0);
    if (inp) {
      setScore2(0);
      setScore1(0);
    }
  };
  return (
    <GameContext.Provider
      value={{ handleClick, handleNewGame, score1, score2 }}
    >
      <div className="game-container">
        <IntroDashboard />
        <Board
          setScore1={setScore1}
          setScore2={setScore2}
          endMessage={endMessage}
          boardArray={boardArray}
        />
      </div>
    </GameContext.Provider>
  );
};

export default Game;
