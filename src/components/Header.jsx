import React from "react";
import * as S from "../style/HeaderStyle";

const Header = () => {
  return (
    <S.Header>
      <S.ContentSpan>D.A</S.ContentSpan>
      <S.TitleNav>
        <S.ContentTitleSpan color={`#fff`}>개설</S.ContentTitleSpan>
        <S.ContentTitleSpan color={`#fff`}>프로젝트</S.ContentTitleSpan>
        <S.ContentTitleSpan color={`#e7aa4a`}>콜라보</S.ContentTitleSpan>
        <S.ContentTitleSpan color={`#e7aa4a`}>내 동아리</S.ContentTitleSpan>
        <S.ContentTitleSpan color={`#e7aa4a`}>내 정보</S.ContentTitleSpan>
      </S.TitleNav>
    </S.Header>
  );
};

export default Header;
