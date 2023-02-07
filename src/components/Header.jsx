import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/HeaderStyle";

const Header = () => {
  const [isToken, setIsToken] = useState(false);
  const [isSignInUp, setIsSignInUp] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    if (
      window.location.pathname == "/SignIn" ||
      window.location.pathname == "/SignUp"
    )
      setIsSignInUp(true);
    else setIsSignInUp(false);
  });
  return (
    <S.Header>
      <S.ContentSpan onClick={() => Navigate("/")}>D.A</S.ContentSpan>
      {isSignInUp ? null : (
        <S.TitleNav>
          <S.ContentTitleSpan color={`#fff`}>개설</S.ContentTitleSpan>
          <S.ContentTitleSpan color={`#fff`}>프로젝트</S.ContentTitleSpan>
          <S.ContentTitleSpan color={`#fff`}>콜라보</S.ContentTitleSpan>
          {isToken ? (
            <>
              <S.ContentTitleSpan color={`#e7aa4a`}>
                내 동아리
              </S.ContentTitleSpan>
              <S.ContentTitleSpan color={`#e7aa4a`}>내 정보</S.ContentTitleSpan>
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
    </S.Header>
  );
};

export default Header;
