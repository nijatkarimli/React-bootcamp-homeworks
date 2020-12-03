import React from "react";

import { routes } from "../../Routes";
import { Link } from "react-router-dom";
import { Wrapper, Title, Menu } from "./Header.styles";

const Header = props => {
  return (
    <Wrapper>
      <Title>Mcking Burger</Title>

      <Menu>
        {routes
          .filter(route => !!route.isLink)
          .map(route => (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
      </Menu>
    </Wrapper>
  );
};

export default Header;
