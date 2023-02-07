import React from "react";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import * as S from "../style/MainStyle";

const Main = () => {
  return (
    <>
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
      </S.MainImg>
    </>
  );
};

export default Main;
