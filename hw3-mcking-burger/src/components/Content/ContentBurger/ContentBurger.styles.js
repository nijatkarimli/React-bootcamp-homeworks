import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-item: center;
`;
export const Burger = styled.div`
  width: 700px;
  height: 600px;
  padding: 25px 0 0 300px;

  & > p {
    padding: 10px 0 0 190px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;

export const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;

export const Salad = styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`;

export const Cheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`;

export const Meat = styled.div`
  width: 80%;
  height: 9%;
  margin: 2% auto;
  background: linear-gradient(#5e2706, #441b07);
  border-radius: 20px;
`;
