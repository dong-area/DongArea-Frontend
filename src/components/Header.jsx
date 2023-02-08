import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/HeaderStyle";
import NotiOn from "../asset/NotiOn.png";
import NotiOff from "../asset/NotiOff.png";
import Modal from "./Modal";
import BaseAxios from "../utils/BaseAxios";

const Header = (props) => {
  const [isSignInUp, setIsSignInUp] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    if (
      window.location.pathname == "/SignIn" ||
      window.location.pathname == "/SignUp" ||
      window.location.pathname == "/create"
    )
      setIsSignInUp(true);
    else setIsSignInUp(false);
  });

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      props.setToken(localStorage.getItem("token"));
      props.setIsToken(true);
      BaseAxios.get("/authed/user/userinfo", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }).then((e) => {
        console.log("user", e);
        props.setUser(e.data.username);
      });
    }
  }, []);

  return (
    <S.Header>
      <S.ContentSpan onClick={() => Navigate("/")}>D.A</S.ContentSpan>
      {isSignInUp ? null : (
        <S.TitleNav>
          <S.ContentTitleSpan
            color={`#fff`}
            onClick={() => {
              if (props.isToken) {
                Navigate("/MakingClubBoard");
              } else {
                Navigate("/SignIn");
              }
            }}
          >
            개설
          </S.ContentTitleSpan>
          <S.ContentTitleSpan
            color={`#fff`}
            onClick={() => {
              if (props.isToken) {
                Navigate("/ProjectBoard");
              } else {
                Navigate("/SignIn");
              }
            }}
          >
            프로젝트
          </S.ContentTitleSpan>
          <S.ContentTitleSpan
            color={`#fff`}
            onClick={() => Navigate("/Collaboration")}
          >
            콜라보
          </S.ContentTitleSpan>
          {props.isToken ? (
            <>
              <S.ContentTitleSpan
                color={`#e7aa4a`}
                onClick={() => Navigate("/myclub")}
              >
                내 동아리
              </S.ContentTitleSpan>
              <S.ContentTitleSpan
                color={`#e7aa4a`}
                onClick={() => Navigate("/myinfo")}
              >
                내 정보
              </S.ContentTitleSpan>
              <S.ContentTitleSpan
                color={`#e7aa4a`}
                onClick={() => {
                  let Real = window.confirm("로그아웃 하시겠습니까?");
                  if (Real) {
                    props.setToken("");
                    props.setIsToken("");
                    props.setUser(null);
                    localStorage.removeItem("token");
                    Navigate("/");
                  }
                }}
              >
                로그아웃
              </S.ContentTitleSpan>
            </>
          ) : (
            <>
              <S.ContentTitleSpan
                color={`#e7aa4a`}
                onClick={() => Navigate("/SignIn")}
              >
                로그인
              </S.ContentTitleSpan>
              <S.ContentTitleSpan
                color={`#e7aa4a`}
                onClick={() => Navigate("/SignUp")}
              >
                회원가입
              </S.ContentTitleSpan>
            </>
          )}
        </S.TitleNav>
      )}
      <S.NotiIcon src={NotiOff}></S.NotiIcon>
    </S.Header>
  );
};

export default Header;
