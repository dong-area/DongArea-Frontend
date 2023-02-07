import axios from "axios";
import React, { useState } from "react";
import laptop from "../../asset/notebook.png";
import * as S from "../../style/AuthStyle";

//로그인
const SignIn = () => {
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");

  const onSubmit = () => {
    axios
      .post("링크", {
        //id, password
      })
      .then((res, req) => {
        //token
        alert("로그인 성공");
      });
  };

  return (
    <S.EntireBox>
      <S.BackgroundFont margin="-16rem 0rem">DONG</S.BackgroundFont>
      <S.BackgroundFont margin="20rem 8rem">ARIA</S.BackgroundFont>
      <S.CenterBox>
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
          <S.SubmitButton type="submit">sign in</S.SubmitButton>
        </form>
      </S.CenterBox>
    </S.EntireBox>
  );
};

export default SignIn;
