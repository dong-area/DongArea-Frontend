import * as S from "../style/BoardStyle";
import BoardImg from "../asset/BoardImg.png";
import WriteButton from "../asset/WriteButton.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseAxios from "../utils/BaseAxios";

//개설 게시판
const Board = (props) => {
  const navigate = useNavigate();
  const [PostList, setPostList] = useState([]);
  const [content, setContent] = useState(-1);
  let dd = 0;
  useEffect(() => {
    BaseAxios.get("/club/post/list")
      .then((res, req) => {
        console.log(res);
        setPostList(res.data.postPage.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dd]);

  const GoWrite = () => {
    navigate("/createclub");
  };

  const LookPost = (idx) => {
    setContent(idx);
  };

  const DeletePage = (idx) => {
    console.log(PostList);
    console.log(idx, props.user);
    BaseAxios.get(`club/post/delete?idx=${idx}&username=${props.user}`)
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <S.Body />

      <S.Wrapper>
        <S.Post>
          <S.Title>개설 게시판</S.Title>
          <S.PostTop />

          {PostList.map((post, idx) => (
            <S.Each onClick={() => LookPost(idx)} key={post.idx}>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.PostWriter>{post.writer}</S.PostWriter>
            </S.Each>
          ))}

          <S.PostBottom />
        </S.Post>

        {content === -1 ? (
          <>
            <S.RightImg>
              <S.Img src={BoardImg} />
            </S.RightImg>
          </>
        ) : (
          <>
            <S.ShadowSqare />
            <S.PostSqare>
              <S.PostBoxTitle> {PostList[content].title} </S.PostBoxTitle>
              <S.PostBoxWriter>{PostList[content].writer}</S.PostBoxWriter>
              <S.PostBoxHr />
              <S.PostBoxImg src={PostList[content].image_url} alt="no Img" />
              <S.PostBoxContext>{PostList[content].context} </S.PostBoxContext>
              <button onClick={() => DeletePage(PostList[content].idx)}>
                삭제
              </button>
            </S.PostSqare>
          </>
        )}

        <S.WriteBtn onClick={GoWrite}>
          <img src={WriteButton} alt="글쓰기 버튼" />
        </S.WriteBtn>
      </S.Wrapper>
    </>
  );
};

export default Board;
