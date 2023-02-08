import React from "react";
import School from "../asset/schoolBlur.png";
import * as S from "../style/MyClubStyle";
import laptop from "../asset/laptop2.png";

const MyClub = () => {
  return (
    <>
      <S.Background>
        <S.TitleWrap>
          <S.TitleText color="white" delay="0s" shadow="4px 2px 2px gray">
            We're the
          </S.TitleText>
          <S.TitleText color="white" delay="0.5s" shadow="4px 2px 2px gray">
            Team
            <S.TitleText
              color="black"
              margin="1rem"
              delay="1s"
              shadow="4px 2px 2px gray"
            >
              DGSW
            </S.TitleText>
          </S.TitleText>
        </S.TitleWrap>
        <S.TitleImg src={laptop} alt="" />
        <S.MainImg src={School} alt="" />
        <S.TitleWrap>
          <S.TitleText color="white" delay="0s">
            Introduce
          </S.TitleText>
          <S.TitleText color="white" delay="0s">
            for
            <S.TitleText color="#e7aa4a" margin="1rem" delay="0s" shadow="none">
              my club.
            </S.TitleText>
          </S.TitleText>
        </S.TitleWrap>
        <S.BottomBox>
          <S.SecondBottomBox></S.SecondBottomBox>
        </S.BottomBox>
      </S.Background>
    </>
  );
};

export default MyClub;
