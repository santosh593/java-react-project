import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Frontend/HomePage";

function FrontendRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more frontend routes here */}
    </Routes>
  );
}

export default FrontendRoutes;
