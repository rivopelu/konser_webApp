import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, MainPage } from "../../pages";

const RouterMain = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default RouterMain;
