import axios from "axios";
import React, { useState } from "react";
import * as S from "../../style/AuthStyle";
import laptop from "../../asset/notebook.png";

//회원가입
const SignUp = () => {
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const [chPw, setChPw] = useState("");
  const [Name, setName] = useState("");
  const [Club, setClub] = useState("");
  const [ClassNumber, setClassNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (Pw == chPw) {
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
    } else {
      alert("비밀번호를 확인해주세요!");
    }
  };

  return (
    <>
      <S.EntireBox>
        <S.BackgroundFont margin="-16rem 0rem">DONG</S.BackgroundFont>
        <S.BackgroundFont margin="20rem 8rem">ARIA</S.BackgroundFont>
        <form onSubmit={onSubmit}>
          <S.CenterBox
            width={"32.375rem"}
            height={"50.5rem"}
            margin={"-6rem auto"}
          >
            <S.Title>Sign Up</S.Title>
            <S.InputGroup>
              <S.InputSpan>이름</S.InputSpan>
              <S.InputTag
                className="name"
                placeholder="최대 20자 이내로 입력해주세요(영어)"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.InputBottomLine />
            </S.InputGroup>
            <S.InputGroup>
              <S.InputSpan>아이디</S.InputSpan>
              <S.InputTag
                className="id"
                placeholder="최대 15자 이내로 입력해주세요"
                value={Id}
                onChange={(e) => setId(e.target.value)}
              />
              <S.InputBottomLine />
            </S.InputGroup>
            <S.InputGroup>
              <S.InputSpan>비밀번호</S.InputSpan>
              <S.InputTag
                className="password"
                placeholder="최대 30자 이내로 입력해주세요"
                value={Pw}
                onChange={(e) => setPw(e.target.value)}
              />
              <S.InputBottomLine />
            </S.InputGroup>
            <S.InputGroup>
              <S.InputSpan>비밀확인</S.InputSpan>
              <S.InputTag
                className="passwordCh"
                placeholder="입력하신 비밀번호를 입력해주세요"
                value={chPw}
                onChange={(e) => setChPw(e.target.value)}
              />
              <S.InputBottomLine />
            </S.InputGroup>
            <S.InputGroup>
              <S.InputSpan>동아리명</S.InputSpan>
              <S.InputTag
                className="club"
                placeholder="소속 동아리를 입력해주세요"
                value={Club}
                onChange={(e) => setClub(e.target.value)}
              />
              <S.InputBottomLine />
            </S.InputGroup>
            <S.InputGroup>
              <S.InputSpan>학번</S.InputSpan>
              <S.InputTag
                className="class"
                placeholder="소속된 학년, 반, 번호를 입력해주세요"
                value={ClassNumber}
                onChange={(e) => setClassNumber(e.target.value)}
              />
              <S.InputBottomLine />
            </S.InputGroup>
            <S.BottomImg src={laptop} alt="laptop" />
            <S.SubmitButton margin="10rem 2rem" type="submit">
              Sign Up
            </S.SubmitButton>
          </S.CenterBox>
        </form>
      </S.EntireBox>
    </>
  );
};

export default SignUp;
