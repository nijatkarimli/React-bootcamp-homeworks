import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: #e1e1e1;
  padding: 0 0 50px 0;
  width: 415px;
  margin: 10% 0 10% 35%;
  box-shadow: 20px 20px 50px 15px #5743437d;
  & > h2 {
    text-align: center;
  }
`;
export const RemoveItem = styled.span`
  position: absolute;
  width: 20px;
  text-align: center;
  background-color: #c4b964;
  padding: 5px 5px 5px 5px;
  margin: -8% 0 0px 90%;
  border: 1px solid black;
  border-radius: 25px;

  cursor: pointer;
`;

export const TaskContent = styled.div`
  background-color: #e1e1e1;
  position: absolute;
  margin: -30% 0 0 -64%;
  padding: 0% 2% 5% 2%;
  border-radius: 5px;

  visibility: ${props => (props.isOpen ? `visible` : `hidden`)};

  & > h4 {
    text-align: center;
  }
`;

export const Image = styled.img`
  position: absolute;
  margin: -6% 0 0 85%;
`;
