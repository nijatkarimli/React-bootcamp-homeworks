import { useContext } from "react";
import { EnterContext } from "./contexts/EnterContext";
import UserInput from "./components/UserInput/UserInput";
import Game from "./components/Game/Game";

const Router = () => {
  const { isEntered } = useContext(EnterContext);

  return (
    <>
      {!isEntered && <UserInput />}
      {isEntered && <Game />}
    </>
  );
};

export default Router;
