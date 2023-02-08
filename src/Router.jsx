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
import MyClub from "./pages/MyClub";
import MakingProj from "./pages/MakingProj";
const Router = () => {
  const [isToken, setIsToken] = useState(false);
  const [token, setToken] = useState("");
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
              setToken={setToken}
              setIsToken={setIsToken}
            />
          }
        ></Route>
        <Route
          path="/myinfo"
          element={
            <MyInfo
              token={token}
              setIsToken={setIsToken}
              setToken={setToken}
              setUser={setUser}
            />
          }
        ></Route>
        <Route
          path="/SignIn"
          element={<SignIn setIsToken={setIsToken} setToken={setToken} />}
        ></Route>
        <Route
          path="/SignUp"
          element={<SignUp setIsToken={setIsToken} />}
        ></Route>
        <Route path="/createclub" element={<MackingClub />}></Route>
        <Route path="/createproj" element={<MakingProj />}></Route>
        <Route path="/MakingClubBoard" element={<MakingClubBoard />}></Route>
        <Route path="/Collaboration" element={<Collaboration />}></Route>
        <Route path="/ProjectBoard" element={<ProjectBoard />}></Route>
        <Route path="/myclub" element={<MyClub />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
