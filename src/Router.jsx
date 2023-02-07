import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MyInfo from "./pages/MyInfo";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Header from "./components/Header";
import Board from "./pages/Board";
import MackingClub from "./pages/MackingClub";
import Collaboration from "./pages/Collaboration";

const Router = () => {
  const [isToken, setIsToken] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Header
        isToken={isToken}
        setIsToken={setIsToken}
        setToken={setToken}
        setUser={setUser}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={<Main isToken={isToken} token={token} setUser={setUser} />}
        ></Route>
        <Route path="/myinfo" element={<MyInfo />}></Route>
        <Route
          path="/SignIn"
          element={<SignIn setIsToken={setIsToken} setToken={setToken} />}
        ></Route>
        <Route
          path="/SignUp"
          element={<SignUp setIsToken={setIsToken} />}
        ></Route>
        <Route path="/create" element={<MackingClub />}></Route>
        <Route path="/Board" element={<Board />}></Route>
        <Route path="/Collaboration" element={<Collaboration />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
