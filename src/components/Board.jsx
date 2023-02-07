import * as S from "../style/BoardStyle";
import BoardImg from "../asset/BoardImg.png";
import WriteButton from "../asset/WriteButton.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

//개설 게시판
const Board = () => {
  const navigate = useNavigate();

/*  useEffect(()=>{
    axios.get(``)
    .then((res,req)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.error(error)
    })
  }) */

  const GoWrite = () => {
    navigate('/create')
  }

  return (
    <>
      <S.Body />

      <S.Wrapper>
        <S.RightImg>
            <S.Img src={BoardImg} alt="BoardImg" />
        </S.RightImg>


        <S.Post>
          <S.Title>개설 게시판</S.Title>
          <S.PostTop/>
          
          <S.Each>
            <S.PostTitle>post.게시글 제목</S.PostTitle>
            <S.PostWriter>post.작성자</S.PostWriter>
          </S.Each>
        
          <S.Each>
            <S.PostTitle>post.게시글 제목</S.PostTitle>
            <S.PostWriter>post.작성자</S.PostWriter>
          </S.Each>

          <S.Each>
            <S.PostTitle>post.게시글 제목</S.PostTitle>
            <S.PostWriter>post.작성자</S.PostWriter>
          </S.Each>

          <S.PostBottom/>
        </S.Post>
        <S.WriteBtn onClick={GoWrite}>
          <img src={WriteButton} alt='글쓰기 버튼'/>
        </S.WriteBtn>
      </S.Wrapper>
    </>
  );
};

export default Board;
