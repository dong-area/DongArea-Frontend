import styled from "styled-components";
import "./index.css";

export const MainImg = styled.div`
  width: 100%;
  height: 60rem;
  background-color: black;
`;

export const ClubText = styled.p`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
  margin: 1rem;
`;

export const MainImgLeftArea = styled.nav`
  display: inline-block;
  width: 40%;
  height: 100%;
  background-color: #1f1f1f;
`;
export const LeftArea = styled.nav`
  display: inline-block;
  width: 80%;
  height: 50%;
  margin: 10%;
  margin-top: 44%;
`;
