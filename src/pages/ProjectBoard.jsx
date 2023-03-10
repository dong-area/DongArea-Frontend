import * as S from "../style/BoardStyle";
import BoardImg from "../asset/BoardImg.png";
import WriteButton from "../asset/WriteButton.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BaseAxios from "../utils/BaseAxios";

//프로젝트 게시판
const Board = (props) => {
  const navigate = useNavigate();
  const [PostList, setPostList] = useState([]);
  const [content, setContent] = useState(-1);

  useEffect(() => {
    BaseAxios.get("/project/post/list")
      .then((res, req) => {
        console.log(res.data);
        setPostList(res.data.postPage.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const GoWrite = () => {
    navigate("/createproj");
  };

  const LookPost = (idx) => {
    setContent(idx);
  };
  const DeletePage = (idx) => {
    let real = window.confirm("삭제하시겠습니까?");
    if (real) {
      console.log(PostList);
      console.log(idx, props.user);
      BaseAxios.get(`club/post/delete?idx=${idx}&username=${props.user}`)
        .then((e) => {
          console.log(e);
        })
        .catch((e) => console.log(e));
      navigate("/");
    }
  };
  return (
    <>
      <S.Body />

      <S.Wrapper>
        <S.Post>
          <S.Title>프로젝트 게시판</S.Title>
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
              <S.Img src={BoardImg} alt="BoardImg" />
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
              <S.PostBoxContext>{PostList[content].context}</S.PostBoxContext>
              <S.DelBtn onClick={() => DeletePage(PostList[content].idx)}>
                삭제
              </S.DelBtn>
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
