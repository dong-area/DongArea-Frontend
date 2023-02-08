import styled, { keyframes } from "styled-components";

const TitletetAni = keyframes`
    0%{
        opacity:0;
        margin-top:1rem;
    }100%{
        opacity:1;
        margin-top:0rem;
    }
`;

export const MainImg = styled.img`
  width: 100%;
  margin-top: 10rem;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const Background = styled.nav`
  width: 100%;
  height: 240rem;
  background-color: #1f1f1f;
`;

export const TitleText = styled.p`
  color: ${(props) => props.color};
  opacity: 0;
  text-shadow: ${(props) => props.shadow};
  display: flex;
  font-size: 5rem;
  font-weight: 800;
  margin-left: ${(props) => props.margin};
  animation: ${TitletetAni} 1.5s;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
`;

export const TitleWrap = styled.nav`
  position: absolute;
  margin: 15rem 5rem;
`;

export const BottomBox = styled.nav`
  width: 100%;
  height: 70%;
  background-color: #a0a0a0;
  margin-top: 30%;
`;

export const SecondBottomBox = styled.nav`
  position: absolute;
  height: 200%;
  width: 80%;
  right: 0;
  margin: 20% 0;
  background-color: #e7aa4a;
  border-radius: 2rem;
`;

export const TitleImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5%;
`;
