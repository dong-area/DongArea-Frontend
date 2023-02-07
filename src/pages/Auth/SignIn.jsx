import axios from "axios";
import React, { useState } from "react";
import * as S from "../../style/AuthStyle";
import laptop from "../../asset/notebook.png";
import { useNavigate } from "react-router-dom";

//로그인
const SignIn = (props) => {
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const Navigate = useNavigate();

  const GoHome = () => {
    Navigate("/");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", {
        id: Id,
        password: Pw,
      })
      .then((res) => {
        //token
        console.log(res);
        alert("로그인 성공");
        props.setToken(res.authorization);
        props.setIsToken(true);
        GoHome();
      })
      .catch((error) => {
        alert("아이디 및 비밀번호를 다시 입력해주세요!");
        console.error(error);
      });
  };

  return (
    <S.EntireBox>
      <S.BackgroundFont margin="-16rem 0rem">DONG</S.BackgroundFont>
      <S.BackgroundFont margin="20rem 8rem">ARIA</S.BackgroundFont>
      <S.CenterBox
        width={"32.375rem"}
        height={"42.75rem"}
        margin={"-2rem auto"}
      >
        <S.Title>Login</S.Title>
        <S.ExampleImg src={laptop} alt="dd" />
        <form onSubmit={onSubmit}>
          <S.InputGroup>
            <S.InputSpan>ID</S.InputSpan>
            <S.InputTag
              className="id"
              placeholder="아이디를 입력해주세요"
              value={Id}
              onChange={(e) => setId(e.target.value)}
            />
          </S.InputGroup>
          <S.InputGroup>
            <S.InputBottomLine />
            <S.InputSpan>PW</S.InputSpan>
            <S.InputTag
              className="password"
              placeholder="비밀번호를 입력해주세요"
              value={Pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <S.InputBottomLine />
          </S.InputGroup>
          <S.SubmitButton margin="2rem 2rem" type="submit">
            sign in
          </S.SubmitButton>
        </form>
      </S.CenterBox>
    </S.EntireBox>
  );
};

export default SignIn;
