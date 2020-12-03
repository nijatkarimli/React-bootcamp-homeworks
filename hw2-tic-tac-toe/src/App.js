import React, { useState } from "react";

import "./App.css";
import { EnterContext } from "./contexts/EnterContext";
import Route from "./Route.js";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  return (
    <EnterContext.Provider
      value={{
        isEntered,
        setIsEntered,
        player1,
        player2,
        setPlayer1,
        setPlayer2,
      }}
    >
      <div className="app-input">
        <Route />
      </div>
    </EnterContext.Provider>
  );
}

export default App;
