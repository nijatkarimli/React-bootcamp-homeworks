import React, { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";
import "./Button.css";

const Button = ({ id, value }) => {
  const { handleClick } = useContext(GameContext);
  return (
    <>
      <button
        key={id}
        className="btn-input"
        id={id}
        onClick={() => handleClick(id)}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
