import React from "react";

import { Switch, Route } from "react-router-dom";
import ContentOrder from "./ContentOrder/ContentOrder";
import ContentBurger from "./ContentBurger/ContentBurger";
import { Wrapper } from "./Content.styles";
import Successful from "../Screens/Successful/Successful";

const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Wrapper>
            <ContentBurger />
          </Wrapper>
          <ContentOrder />
        </Route>
        <Route path="/successful">
          <Successful />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
