import React from "react";
import axios from 'axios';
import BaseAxios from "../utils/BaseAxios";
import * as S from "../style/MyinfoStyle";
import mypageDongari from "../asset/mypagedongari.png";
import mypageProfile from "../asset/mypageProfile.png";

const MyInfo = (props) => {
  console.log(props.token)
  BaseAxios.get('/authed/user/userinfo',{
    headers : {
      Authorization : props.token
    }
  })
  .then((res,req)=>{
    console.log(res)
  })

  return (
    <>
      <S.Body/>

      <S.LogoWholeDiv>
        <S.RightImgDiv/>
        <S.RightImg src={mypageDongari}></S.RightImg>
      </S.LogoWholeDiv>

    </>
  );
};

export default MyInfo;
