import React, { useContext } from "react";
import HomepageContext from "../../../contexts/HomepageContext";

import {
  Burger,
  BreadTop,
  BreadBottom,
  Salad,
  Cheese,
  Meat,
  Wrapper,
} from "./ContentBurger.styles";

const ContentBurger = () => {
  const { burger, isEmpty } = useContext(HomepageContext);
  const [component1, component2, component3] = burger;

  const getMeat = () => {
    const compMeat = [];
    for (let i = 0; i < component1.qty; i++) {
      compMeat.push("M");
    }
    return compMeat;
  };
  const getSalad = () => {
    const compSalad = [];
    for (let i = 0; i < component3.qty; i++) {
      compSalad.push("S");
    }
    return compSalad;
  };
  const getCheese = () => {
    const compCheese = [];
    for (let i = 0; i < component2.qty; i++) {
      compCheese.push("C");
    }
    return compCheese;
  };

  return (
    <Wrapper>
      <Burger>
        <BreadTop />
        {isEmpty && <p>Please start adding ingredients!</p>}
        {getSalad().map(x => (
          <Salad />
        ))}
        {getMeat().map(x => (
          <Meat />
        ))}
        {getCheese().map(x => (
          <Cheese />
        ))}
        <BreadBottom />
      </Burger>
    </Wrapper>
  );
};

export default ContentBurger;
