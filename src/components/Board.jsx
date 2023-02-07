import * as S from "../style/BoardStyle";
import BoardImg from "../asset/BoardImg.png";
import WriteButton from "../asset/WriteButton.png"

const Board = (title, post) => {
  return (
    <>
      <S.Body />

      <S.Wrapper>
        <S.RightImg>
            <S.Img src={BoardImg} alt="BoardImg" />
        </S.RightImg>


        <S.Post>
          <S.Title>Title 게시판</S.Title>
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
        <S.WriteBtn>
          <img src={WriteButton} alt='글쓰기 버튼'/>
        </S.WriteBtn>
      </S.Wrapper>
    </>
  );
};

export default Board;
