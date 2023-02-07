import React from "react";
import * as S from "../style/ClubBoxStyle";
import Icon from "../asset/Icon/image1.png";

const ClubBox = (props) => {
  return (
    <>
      <S.MainBox>
        <S.ImgIcon src={Icon} alt="dd" />
        <S.DetailTitle>{props.data.titleDetail}</S.DetailTitle>
        <S.Context>"{props.data.context}"</S.Context>
        <S.MainTitle>{props.data.title}</S.MainTitle>
      </S.MainBox>
    </>
  );
};

export default ClubBox;
