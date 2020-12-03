import React, { useContext } from "react";
import HomepageContext from "../../../contexts/HomepageContext";
import { Wrapper, Name } from "./Successful.styles";

const Successful = () => {
  const { isEmpty } = useContext(HomepageContext);
  return (
    <>
      {!isEmpty ? (
        <Wrapper>
          Your order has been taken. Bon Appetit! Thank you for choosing{" "}
          <Name> McKing Burger!</Name>
        </Wrapper>
      ) : (
        <Wrapper>Please add ingredients on your burger and order then</Wrapper>
      )}
    </>
  );
};

export default Successful;
