import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/HeaderStyle";

const Header = () => {
  const [isToken, setIsToken] = useState(false);
  const Navigate = useNavigate();
  return (
    <S.Header>
      <S.ContentSpan>D.A</S.ContentSpan>
      <S.TitleNav>
        <S.ContentTitleSpan color={`#fff`}>개설</S.ContentTitleSpan>
        <S.ContentTitleSpan color={`#fff`}>프로젝트</S.ContentTitleSpan>
        <S.ContentTitleSpan color={`#fff`}>콜라보</S.ContentTitleSpan>
        {isToken ? (
          <>
            <S.ContentTitleSpan color={`#e7aa4a`}>내 동아리</S.ContentTitleSpan>
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
    </S.Header>
  );
};

export default Header;
