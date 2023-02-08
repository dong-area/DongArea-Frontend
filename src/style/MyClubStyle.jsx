import styled, { keyframes } from "styled-components";
import "./index.css";

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
  display: inline-block;
  z-index: -5;
`;

export const SecondBottomBox = styled.nav`
  height: 80%;
  width: 100%;
  margin: 10% 0;
  margin-left: 16%;
  background-color: #e7aa4a;
  border-radius: 2rem;
`;

export const TitleImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5%;
`;

export const ContextBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 1rem;
  border-radius: 2rem;
  background-color: #1f1f1f;
  margin: ${(props) => props.margin};
  z-index: 1;
  position: absolute;
`;

export const ContextTitle = styled.p`
  font-size: 2rem;
  color: #e7aa4a;
  margin: 4rem 0rem 0rem 1rem;
  font-weight: 700;
  width: 80%;
`;

export const ContextContent = styled.p`
  font-family: "Roboto-light";
  color: white;
  margin: 1rem 1rem;
  widht: 80%;
  font-size: 1.25rem;
`;

export const ContextLogo = styled.img`
  margin: 1rem 20%;
  height: 30%;
`;
