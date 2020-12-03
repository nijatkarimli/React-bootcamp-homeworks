import styled from "styled-components";

export const FormContainer = styled.form`
  position: relative;
  width: 350px;
  margin-left: 5px;
  margin-bottom: 0.1em;
  margin-top: 1em;
`;

export const ButtonSubmit = styled.button`
  position: absolute;
  right: -12%;
  background-color: #a7b7b5;
  border: 1px solid black;
  border-radius: 10px;
  width: 25%;
  height: 30px;
  cursor: pointer;
`;

export const FormInput = styled.input`
  position: absolute;
  left: 0;
  border: 1px solid black;
  border-radius: 10px;
  width: 77%;
  height: 30px;
  padding-left: 10px;
`;
