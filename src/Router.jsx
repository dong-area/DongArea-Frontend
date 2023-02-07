import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import MyInfo from "./pages/MyInfo";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/myinfo" element={<MyInfo />}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
