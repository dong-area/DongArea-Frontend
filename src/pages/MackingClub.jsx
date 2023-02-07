import React from "react";
import * as S from "../style/MackingClubStyle";
import Background from "../asset/dongarea.png";

const MackingClub = () => {
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
            <S.InputTag type="text" placeholder="게시 제목을 입력해주세요." />
            <S.InputBottomLine />
          </S.InputGroup>
        </S.InputNav>
        <S.InfoNav>
          <S.Info>내용</S.Info>
          <S.TextArea placeholder="글자를 최대 300자 이내로 입력해주세요"></S.TextArea>
          <label htmlFor="imgs">
            <S.InputFile>이미지 업로드</S.InputFile>
          </label>
          <S.InputFileNone type="file" id="imgs" accept="image/*" />
        </S.InfoNav>
        <S.UploadBtn>Upload</S.UploadBtn>
      </S.MainBox>
    </S.BackGroundBox>
  );
};

export default MackingClub;
