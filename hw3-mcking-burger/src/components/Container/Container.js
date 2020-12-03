import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Container = ({ children }) => {
  return <Router>{children}</Router>;
};

export default Container;
