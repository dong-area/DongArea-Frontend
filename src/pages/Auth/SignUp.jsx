import axios from "axios";
import React, { useState } from "react";
import * as S from "../../style/AuthStyle";

//회원가입
const SignUp = () => {
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const [Name, setName] = useState("");
  const [Club, setClub] = useState("");
  const [ClassNumber, setClassNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://10.80.161.163:8080/auth/join", {
        id: Id,
        password: Pw,
        username: Name,
        stu_id: ClassNumber,
      })
      .then((res, req) => {
        //token
        console.log("dd", res);
        alert("계정 생성 성공");
      })
      .catch((error) => {
        console.error("dd", error);
      });
  };

  return (
    <>
      <S.EntireBox>
        <S.BackgroundFont margin="-16rem 0rem">DONG</S.BackgroundFont>
        <S.BackgroundFont margin="20rem 8rem">ARIA</S.BackgroundFont>
        <form onSubmit={onSubmit}>
          <S.InputTag
            className="id"
            placeholder="Id"
            value={Id}
            onChange={(e) => setId(e.target.value)}
          />
          <S.InputTag
            className="password"
            placeholder="비밀번호"
            value={Pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <S.InputTag
            className="name"
            placeholder="이름"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.InputTag
            className="club"
            placeholder="동아리"
            value={Club}
            onChange={(e) => setClub(e.target.value)}
          />
          <S.InputTag
            className="class"
            placeholder="학번"
            value={ClassNumber}
            onChange={(e) => setClassNumber(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </S.EntireBox>
    </>
  );
};

export default SignUp;
