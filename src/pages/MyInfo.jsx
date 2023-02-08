import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import BaseAxios from "../utils/BaseAxios";
import * as S from "../style/MyinfoStyle";
import mypageDongari from "../asset/mypagedongari.png";
import mypageProfile from "../asset/mypageProfile.png";
import LogoutImg from "../asset/logout.png";

const MyInfo = (props) => {
  const [Info,setInfo] = useState([])
  const navigate = useNavigate()

  console.log(props.token)
  useEffect(()=>{
    BaseAxios.get('/authed/user/userinfo',{
    headers : {
      Authorization : props.token
    }
  })
  .then((res,req)=>{
    setInfo(res.data)
  })
  },[])
  

  return (
    <>
      <S.Body/>

      <S.LogoWholeDiv>
        <S.RightImgDiv/>
        <S.RightImg src={mypageDongari}></S.RightImg>
      </S.LogoWholeDiv>
      
      <S.ProfileBox>
        <S.ProfileImg src={mypageProfile}></S.ProfileImg>
        <S.WholeText>
          <S.Text>
            <S.ProfileLabel>이름</S.ProfileLabel>
            <S.ProfileText>{Info.username}</S.ProfileText>
          </S.Text>
          <S.Text>
            <S.ProfileLabel>학번</S.ProfileLabel>
            <S.ProfileText>{Info.stu_id}</S.ProfileText>
          </S.Text>
          <S.Text>
            <S.ProfileLabel>내 동아리</S.ProfileLabel>
            <S.ProfileText>{Info.clubname}</S.ProfileText>
          </S.Text>
        </S.WholeText>

        <S.Logout src={LogoutImg} onClick={()=>{
          props.setToken("");
          props.setIsToken("");
          props.setUser(null);
          navigate('/')}}></S.Logout>
      </S.ProfileBox>

    </>
  );
};

export default MyInfo;
