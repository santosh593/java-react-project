import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminFormPage from "../components/Admin/AdminFormPage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminFormPage />} />
      {/* Add more admin routes here */}
    </Routes>
  );
}

export default AdminRoutes;
