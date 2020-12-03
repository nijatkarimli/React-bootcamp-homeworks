import React from "react";

import Button from "../Button/Button";

import "./Board.css";

const Board = ({ endMessage, boardArray }) => {
  return (
    <>
      <div className="board-container-input">
        {boardArray.map((singleValue, index) => (
          <Button id={index} value={singleValue} />
        ))}
      </div>
      <br></br>
      <div className="board-message">{endMessage}</div>
    </>
  );
};

export default Board;
