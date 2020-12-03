import React, { useState, useEffect } from "react";

import Header from "../../Header/Header";
import Content from "../../Content/Content";
import HomepageContext from "../../../contexts/HomepageContext";
import Container from "../../Container/Container";

const ingredients = [
  { id: 1, name: "Meat", price: 1.3, qty: 0 },
  { id: 2, name: "Cheese", price: 0.4, qty: 0 },
  { id: 3, name: "Salad", price: 0.5, qty: 0 },
];
const Homepage = () => {
  const [burger, setBurger] = useState(ingredients);
  const [isEmpty, setEmpty] = useState(true);

  const [component1, component2, component3] = burger;

  const handleClick = event => {
    setBurger(
      burger.map(component => {
        let newBurger = { ...component };

        if (component.id === Number(event.target.id[0])) {
          if (event.target.id[1] === "-" && newBurger.qty > 0)
            newBurger.qty = newBurger.qty - 1;
          else if (event.target.id[1] === "+")
            newBurger.qty = newBurger.qty + 1;
        }
        return newBurger;
      })
    );
  };

  useEffect(() => {
    if (component1.qty || component2.qty || component3.qty) setEmpty(false);
    else setEmpty(true);
  }, [component1.qty, component2.qty, component3.qty]);

  return (
    <HomepageContext.Provider
      value={{
        burger,
        setBurger,
        handleClick,
        isEmpty,
      }}
    >
      <Container>
        <Header />
        <Content />
      </Container>
    </HomepageContext.Provider>
  );
};

export default Homepage;
