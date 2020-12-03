import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #c15b21;

  & > p {
    font-weight: bold;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin-left: 40%;
  margin-bottom: 10px;
  width: 15%;
  height: 50px;
  background-color: gray;
  & > a {
    text-decoration: none;
    color: white;
  }
`;
