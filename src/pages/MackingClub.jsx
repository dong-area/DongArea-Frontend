import React, { useRef, useState, useMemo } from "react";
import * as S from "../style/MackingClubStyle";
import Background from "../asset/dongarea.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BaseAxios from "../utils/BaseAxios";

//개설 글쓰기
const MackingClub = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [url, setUrl] = useState("");

  const PostAxios = (image_url) => {
    console.log(title);
    console.log(image_url);
    console.log(info);

    BaseAxios.post("/club/post/write", {
      title: title,
      context: info,
      writer: props.user,
      image_url: image_url,
    }).then((e) => {
      console.log(e);
    });
  };

  const CheckUpload = () => {
    if (title == "" || info == "") {
      alert("정보를 정확하세 입력해주세요");
    } else {
      let Check = window.confirm(
        title + "\n" + info + "\n" + "를 올리시겠습니까?"
      );
      if (Check) {
        PostAxios(url);
        navigate("/");
      }
    }
  };

  return (
    <S.BackGroundBox>
      <S.BackGroundImg src={Background} alt="사진" />
      <S.SideBar></S.SideBar>
      <S.MainBox>
        <S.MainTitle>개설 글쓰기</S.MainTitle>
        <S.TitleHr />
        <S.InputNav>
          <S.InputGroup>
            <S.InputSpan>제목</S.InputSpan>
            <S.InputTag
              type="text"
              placeholder="게시 제목을 입력해주세요."
              onChange={(e) => setTitle(e.target.value)}
            />
            <S.InputBottomLine />
          </S.InputGroup>
        </S.InputNav>
        <S.InfoNav>
          <S.Info>내용</S.Info>
          <S.TextArea
            placeholder="글자를 최대 300자 이내로 입력해주세요"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></S.TextArea>
          <S.InputFileNone
            type="text"
            placeholder="이미지 URL을 넣어주세요"
            value={url}
            onChange={(e) => [setUrl(e.target.value)]}
          />
        </S.InfoNav>
        <S.UploadBtn
          onClick={() => {
            console.log(title, info, url);
            CheckUpload();
          }}
        >
          Upload
        </S.UploadBtn>
      </S.MainBox>
    </S.BackGroundBox>
  );
};

export default MackingClub;
