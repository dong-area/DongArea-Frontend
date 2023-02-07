import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import * as S from "../style/MainStyle";
import School from "../asset/school.png";
import ClubBox from "../components/ClubBox";
import axios from "axios";

const Main = (props) => {
  const [isFreeClub, setIsFreeClub] = useState(false);
  useEffect(() => {
    if (props.isToken && props.user == null) {
      axios
        .post("", {
          header: { Authorization: `${props.Token}` },
        })
        .then((e) => {
          console.log("suc", e);
          props.setUser(e);
        })
        .catch((e) => {
          console.log("error", e);
        });
    }
  }, []);
  return (
    <S.Mainform>
      <S.MainImg>
        <S.MainImgLeftArea>
          <S.LeftArea>
            <Slogan></Slogan>
            <S.ClubText fontSize={1.875} color="#e7aa4a">
              CNS
            </S.ClubText>
            <S.ClubText fontSize={1.4} color="#fff">
              저희 동아리는 입학원서사이트를 유지보수하는 동아리입니다!
            </S.ClubText>
          </S.LeftArea>
        </S.MainImgLeftArea>
        <S.MainImgRightArea></S.MainImgRightArea>
      </S.MainImg>
      <S.BottomForm>
        <S.BottomImg src={School} alt="school" />
        <S.BottomTitle>
          <S.ClubText fontSize={6} color="#e7aa4a">
            All of the
          </S.ClubText>
          <S.ClubText fontSize={6} color="#e7aa4a">
            <S.ClubSpanText>DGSW</S.ClubSpanText> club.
          </S.ClubText>
          <S.BottomBtnNav>
            <S.BottomBtn
              onClick={() => setIsFreeClub(false)}
              isFree={!isFreeClub}
            >
              창체
            </S.BottomBtn>
            <S.BottomBtn
              onClick={() => setIsFreeClub(true)}
              isFree={isFreeClub}
            >
              자율
            </S.BottomBtn>
          </S.BottomBtnNav>
        </S.BottomTitle>
        <S.BottomClubNav>
          <ClubBox></ClubBox>
          <ClubBox></ClubBox>
          <ClubBox></ClubBox>
          <ClubBox></ClubBox>
          <ClubBox></ClubBox>
          <ClubBox></ClubBox>
        </S.BottomClubNav>
      </S.BottomForm>
    </S.Mainform>
  );
};

export default Main;
