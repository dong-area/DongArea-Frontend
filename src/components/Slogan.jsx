import React from "react";
import * as S from "../style/SloganStyle";

const Slogan = () => {
  return (
    <>
      <S.SloganText
        fontSize={"5.375rem"}
        color="#e7aa4a;"
        margin="0rem 0rem -1rem 1rem"
      >
        Dongari
      </S.SloganText>
      <S.SloganText
        fontSize={"4.8rem"}
        color="#fff"
        margin="0rem 0rem 3rem 1rem"
      >
        in your area
      </S.SloganText>
    </>
  );
};

export default Slogan;
