import React, { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";
import "./IntroDashboard.css";

const DashboardButton = () => {
  const { handleNewGame } = useContext(GameContext);
  return (
    <>
      <button
        type="button"
        className="dash-btn"
        onClick={() => {
          handleNewGame();
        }}
      >
        New Game
      </button>
      <button
        type="button"
        className="dash-btn"
        onClick={() => {
          handleNewGame("all");
        }}
      >
        Reset Game
      </button>
    </>
  );
};

export default DashboardButton;
