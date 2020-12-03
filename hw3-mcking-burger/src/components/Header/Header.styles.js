import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5em 1.5em;
  position: relative;
  background-color: #8e471c;
`;

export const Menu = styled.ul`
  list-style-type: none;

  & > li a {
    padding: 0 20px 0 0;
    position: absolute;
    right: 2em;
    top: 2.5em;
    color: #fff;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  margin: 0;

  color: #fff;
`;
