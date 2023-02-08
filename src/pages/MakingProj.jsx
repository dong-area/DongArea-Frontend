import React from "react";
import * as S from "../style/MackingClubStyle";
import react, { useRef, useState, useMemo } from "react";
import Background from "../asset/dongarea.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MakingProj = () => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState(null);
  const Navigate = useNavigate();

  const PostAxios = (image_url) => {
    axios.post("/project/post/write", {
      title: title,
      context: info,
      image_url: image_url.silce(5),
    });
  };

  const CheckUpload = () => {
    if (title == "" || info == "" || img == null) {
      alert("정보를 정확하세 입력해주세요");
    } else {
      const image_url = img.thumbnail;
      console.log(image_url.slice(5));
      let Check = window.confirm(
        title + "\n" + info + "\n" + "를 올리시겠습니까?"
      );
      if (Check) {
        PostAxios(image_url);
        Navigate("/ProjectBoard");
      }
    }
  };

  const uploadFile = (e) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImg({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
      console.log("d", url);
    }
  };
  return (
    <S.BackGroundBox>
      <S.BackGroundImg src={Background} alt="사진" />
      <S.SideBar></S.SideBar>
      <S.MainBox>
        <S.MainTitle>프로젝트 글쓰기</S.MainTitle>
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
          <label htmlFor="imgs">
            <S.InputFile>이미지 업로드</S.InputFile>
          </label>
          <S.InputFileNone
            type="file"
            id="imgs"
            accept="image/*"
            onChange={uploadFile}
          />
        </S.InfoNav>
        <S.UploadBtn
          onClick={() => {
            console.log(title, info, img);
            CheckUpload();
          }}
        >
          Upload
        </S.UploadBtn>
      </S.MainBox>
    </S.BackGroundBox>
  );
};

export default MakingProj;
