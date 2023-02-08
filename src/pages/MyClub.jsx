import React from "react";
import School from "../asset/schoolBlur.png";
import * as S from "../style/MyClubStyle";
import laptop from "../asset/laptop2.png";
import logo from "../asset/Logo.png";

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
          <S.ContextBox
            width="26rem"
            height="14rem"
            margin="12rem 0rem 0rem 16%"
          >
            <S.ContextTitle>내 동아리명은 무엇인가?</S.ContextTitle>
            <S.ContextContent>CNS</S.ContextContent>
          </S.ContextBox>
          <S.ContextBox
            width="30rem"
            height="14rem"
            margin="30rem 0rem 0rem 60%"
          >
            <S.ContextTitle>내 동아리명 뜻은 무엇인가?</S.ContextTitle>
            <S.ContextContent>
              Care aNd Service 로 사용자의 “관리와 서비스”를 뜻한다.
            </S.ContextContent>
          </S.ContextBox>
          <S.ContextBox
            width="28rem"
            height="16rem"
            margin="50rem 0rem 0rem 20%"
          >
            <S.ContextTitle>내 동아리 로고는 무엇인가?</S.ContextTitle>
            <S.ContextLogo src={logo} alt="logo" />
          </S.ContextBox>
          <S.ContextBox
            width="30rem"
            height="16rem"
            margin="80rem 0rem 0rem 55%"
          >
            <S.ContextTitle>내 동아리는 어떤 동아리인가?</S.ContextTitle>
            <S.ContextContent>
              CNS는 우리 학교의 신입생 원서 접수 사이트 “IDA”를 제공하고 동아리
              부원들과 함께 여러 프로젝트를 기획, 개발하며 성장하는 동아리이다.
            </S.ContextContent>
          </S.ContextBox>
          <S.ContextBox
            width="30rem"
            height="16rem"
            margin="110rem 0rem 0rem 10%"
          >
            <S.ContextTitle>내 동아리 부장은 누구인가?</S.ContextTitle>
            <S.ContextContent>
              제 3기 CNS부장은 1301 조수현 학생이다.
            </S.ContextContent>
          </S.ContextBox>
          <S.ContextBox
            width="30rem"
            height="20rem"
            margin="135rem 0rem 0rem 50%"
          >
            <S.ContextTitle>내 동아리 부원은 누구인가?</S.ContextTitle>
            <S.ContextContent>2학년</S.ContextContent>
            <S.ContextContent>
              정우재, 박병관, 배진영, 강성훈, 황인영, 김영성
            </S.ContextContent>
            <S.ContextContent>1학년</S.ContextContent>
            <S.ContextContent>조수현, 배경민, 최아영</S.ContextContent>
          </S.ContextBox>
          <S.SecondBottomBox></S.SecondBottomBox>
        </S.BottomBox>
      </S.Background>
    </>
  );
};

export default MyClub;
