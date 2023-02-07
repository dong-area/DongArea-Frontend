import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MyInfo from "./pages/MyInfo";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Header from "./components/Header";
import MakingClubBoard from "./pages/MakingClubBoard";
import MackingClub from "./pages/MackingClub";
import Collaboration from "./pages/Collaboration";
import ProjectBoard from "./pages/ProjectBoard";
import ScrollToTop from "./utils/ScrollToTop";

const Router = () => {
  const [isToken, setIsToken] = useState(true);
  const [token, setToken] = useState("dd");
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Header
        isToken={isToken}
        setIsToken={setIsToken}
        setToken={setToken}
        setUser={setUser}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isToken={isToken}
              token={token}
              user={user}
              setUser={setUser}
            />
          }
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
        <Route path="/MakingClubBoard" element={<MakingClubBoard />}></Route>
        <Route path="/Collaboration" element={<Collaboration />}></Route>
        <Route path="/ProjectBoard" element={<ProjectBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
