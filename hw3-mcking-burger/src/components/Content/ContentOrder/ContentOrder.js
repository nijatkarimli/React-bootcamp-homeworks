import React, { useContext } from "react";
import HomepageContext from "../../../contexts/HomepageContext";

import { Link } from "react-router-dom";
import { Wrapper, Button } from "./ContentOrder.styles";
import ContentRow from "./ContentRow/ContentRow";

const ContentOrder = () => {
  const { burger, handleClick } = useContext(HomepageContext);
  const [component1, component2, component3] = burger;
  return (
    <>
      <Wrapper>
        <p>
          Current Price: $
          {Number(
            4.0 +
              component1.price * component1.qty +
              component2.price * component2.qty +
              component3.price * component3.qty
          ).toFixed(2)}
        </p>
        <ContentRow
          id={component1.id}
          name={component1.name}
          price={component1.price}
          qty={component1.qty}
          handleClick={() => handleClick}
        />
        <ContentRow
          id={component2.id}
          name={component2.name}
          price={component2.price}
          qty={component2.qty}
          handleClick={() => handleClick}
        />
        <ContentRow
          id={component3.id}
          name={component3.name}
          price={component3.price}
          qty={component3.qty}
          handleClick={() => handleClick}
        />

        <Link to="/successful">
          <Button>ORDER</Button>
        </Link>
      </Wrapper>
    </>
  );
};

export default ContentOrder;
