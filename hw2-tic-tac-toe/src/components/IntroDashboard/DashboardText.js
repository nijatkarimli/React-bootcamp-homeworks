import React, { useContext } from "react";
import { EnterContext } from "../../contexts/EnterContext";

import { GameContext } from "../../contexts/GameContext";

const DashboardText = () => {
  const { score1, score2 } = useContext(GameContext);
  const { player1, player2 } = useContext(EnterContext);
  return (
    <div>
      <p>
        <b>{player1} : </b> {score1}
      </p>
      <p>
        <b>{player2} : </b> {score2}
      </p>
    </div>
  );
};

export default DashboardText;
