import React from "react";
import DashboardButton from "./DashboardButton";
import DashboardText from "./DashboardText";

import "./IntroDashboard.css";

const IntroDashboard = () => {
  return (
    <div className="dashboard">
      <DashboardText />
      <DashboardButton />
    </div>
  );
};

export default IntroDashboard;
