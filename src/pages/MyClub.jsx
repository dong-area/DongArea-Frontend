import React from "react";
import School from "../asset/schoolBlur.png";
import * as S from "../style/MyClubStyle";
import laptop from "../asset/laptop2.png";
import logo from "../asset/Logo.png";
import { useEffect, useState } from "react";
import BaseAxios from "../utils/BaseAxios";

const MyClub = (props) => {
  const [Team,setTeam] = useState()

  useEffect(()=>{
    BaseAxios.get('/authed/user/clubinfo',{
    headers : {
      Authorization : props.token
    }
  })
  .then((res,req)=>{
    console.log(res.data)
    setTeam(res.data)
  })
  },[])

  return (
    <>
    { Team &&
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
              key={Team.name}
            >
              {Team.name}
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
            <S.TitleText color="#e7aa4a" margin="1rem" delay="0s" shadow="none" key={Team.name}>
              {Team.name}.
            </S.TitleText>
          </S.TitleText>
        </S.TitleWrap>
        <S.BottomBox>
          <S.ContextBox width="26%" height="14rem" margin="12rem 0rem 0rem 16%">
            <S.ContextTitle>내 동아리명은 무엇인가?</S.ContextTitle>
            <S.ContextContent>{Team.name}</S.ContextContent>
          </S.ContextBox>
          <S.ContextBox width="30%" height="14rem" margin="30rem 0rem 0rem 60%">
            <S.ContextTitle>내 동아리는 어떤 동아리인가?</S.ContextTitle>
            <S.ContextContent>
            {Team.description}
            </S.ContextContent>
          </S.ContextBox>
          <S.ContextBox width="28%" height="16rem" margin="50rem 0rem 0rem 20%">
            <S.ContextTitle>내 동아리 부장은 누구인가?</S.ContextTitle>
            <S.ContextContent>
              {Team.manager}
            </S.ContextContent>
          </S.ContextBox>
          <S.ContextBox width="30%" height="20rem" margin="80rem 0rem 0rem 55%">
            <S.ContextTitle>내 동아리 부원은 누구인가?</S.ContextTitle>
            {(Team.members).map((member)=>(
              <S.ContextContent>{member}</S.ContextContent>
            ))}
          </S.ContextBox>
          <S.SecondBottomBox></S.SecondBottomBox>
        </S.BottomBox>
      </S.Background>
    }
    </>
  );
};

export default MyClub;
