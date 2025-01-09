import React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuPage } from "@/pages/MenuPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MenuPage />} />
    </Routes>
  );
};
