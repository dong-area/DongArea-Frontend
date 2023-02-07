import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import * as S from "../style/MainStyle";
import School from "../asset/school.png";
import ClubBox from "../components/ClubBox";
import axios from "axios";
import Cns from "../asset/cns.png";
import Md from "../asset/md.png";
import Unite from "../asset/unite.png";

const Main = (props) => {
  const [isFreeClub, setIsFreeClub] = useState(false);
  const [posterIndex, setPosterIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setPosterIndex((posterIndex + 1) % 3), 3000);
  }, [posterIndex]);

  const ClubData = [
    {
      title: "CNS",
      titleDetail: "Care and Service",
      context: "저희 동아리는 입학원서사이트를 유지보수하는 동아리입니다!",
      poster: Cns,
      isFree: false,
    },
    {
      title: "모디",
      titleDetail: "Mobile Develper",
      context:
        "안녕하세요. 저희는 모바일 앱 위주로 개발하는 모바일 디벨로퍼(모디)입니다.",
      poster: Md,
      isFree: false,
    },
    {
      title: "Unite",
      titleDetail: "Unite",
      context:
        "저희는 Unity란 게임 개발툴을 가지고 게임을 만드는 동아리입니다!",
      poster: Unite,
      isFree: false,
    },
    {
      title: "B1nd",
      titleDetail: "Bind",
      context:
        "스마트 스쿨을 관리하고 더욱 발전된 서비스를 위해 앞장서는 동아리입니다.",
      poster: null,
      isFree: false,
    },
    {
      title: "ALT",
      titleDetail: "Application Learn Together",
      context: "선후배간 좋은 영향을 주고 받으며 성장하는 동아리입니다.",
      poster: null,
      isFree: false,
    },
    {
      title: "삼디",
      titleDetail: "3d Design",
      context: "교내에 하나뿐인 3D 관련 동아리입니다.",
      poster: null,
      isFree: false,
    },
    {
      title: "인디",
      titleDetail: "In Design",
      context: "자율 디자인 동아리입니다!",
      poster: null,
      isFree: true,
    },
    {
      title: "자전거",
      titleDetail: "자전거",
      context: "건강을 위한 동아리입니다.",
      poster: null,
      isFree: true,
    },
  ];

  const [createArr, setCreateArr] = useState([]);
  const [freeArr, setFreeArr] = useState([]);

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
    let arr1 = [];
    arr1.push(ClubData.filter((e) => e.isFree == false));
    setCreateArr(arr1[0]);
    let arr2 = [];
    arr2.push(ClubData.filter((e) => e.isFree == true));
    setFreeArr(arr2[0]);
  }, []);
  return (
    <S.Mainform>
      <S.MainImg>
        <S.MainImgLeftArea>
          <S.LeftArea>
            <Slogan></Slogan>
            <S.ClubText fontSize={1.875} color="#e7aa4a">
              {ClubData[posterIndex].title}
            </S.ClubText>
            <S.ClubText fontSize={1.4} color="#fff">
              {ClubData[posterIndex].context}
            </S.ClubText>
          </S.LeftArea>
        </S.MainImgLeftArea>
        <S.MainImgRightArea
          src={ClubData[posterIndex].poster}
          alt="dd"
        ></S.MainImgRightArea>
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
          {isFreeClub
            ? freeArr.map((e) => {
                return <ClubBox data={e}></ClubBox>;
              })
            : createArr.map((e) => {
                return <ClubBox data={e}></ClubBox>;
              })}
        </S.BottomClubNav>
      </S.BottomForm>
    </S.Mainform>
  );
};

export default Main;
