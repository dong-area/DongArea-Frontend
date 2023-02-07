import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MyInfo from "./pages/MyInfo";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Header from "./components/Header";
import MackingClub from "./pages/MackingClub";

const Router = () => {
  const [isToken, setIsToken] = useState(false);
  return (
    <BrowserRouter>
      <Header isToken={isToken}></Header>
      <Routes>
        <Route path="/" element={<Main isToken={isToken} />}></Route>
        <Route path="/myinfo" element={<MyInfo />}></Route>
        <Route
          path="/SignIn"
          element={<SignIn setIsToken={setIsToken} />}
        ></Route>
        <Route
          path="/SignUp"
          element={<SignUp setIsToken={setIsToken} />}
        ></Route>
        <Route path="/create" element={<MackingClub />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
