import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, MainPage, RegisterPage } from "../../pages";

const RouterMain = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default RouterMain;
