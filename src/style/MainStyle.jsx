import styled from "styled-components";
import "./index.css";

export const MainImg = styled.div`
  width: 100%;
  height: 62.5rem;
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
export const MainImgRightArea = styled.img`
  position: absolute;
  display: inline-block;
  width: 60%;
  height: 99.9%;
  background-color: green;
`;
export const Mainform = styled.nav`
  height: 130rem;
  width: 100%;
  background-color: #1f1f1f;
`;

export const ClubSpanText = styled.span`
  color: white;
`;

export const BottomForm = styled.nav`
  background-color: #1f1f1f;
  width: 100%;
  height: 50.7%;
  font-weight: 700;
  margin-top: 5%;
`;

export const BottomTitle = styled.div`
  padding: 4% 4% 2% 6%;
`;

export const BottomImg = styled.img`
  width: 43.75rem;
  height: 25rem;
  position: absolute;
  margin: 4.5rem 0rem 2.25rem 0rem;
  margin-left: 50%;
`;

export const BottomBtn = styled.button`
  background-color: transparent;
  color: ${(props) => (props.isFree ? "#e7aa4a" : "#fff")};
  border: 3px solid ${(props) => (props.isFree ? "#e7aa4a" : "#fff")};
  font-family: "Nanum";
  padding: 0.7rem 4.5rem;
  margin-right: 2rem;
  font-size: 1.5rem;
  &:hover {
    color: #e7aa4a;
    border: 3px solid #e7aa4a;
  }
`;

export const BottomBtnNav = styled.nav`
  margin: 3rem 2rem;
`;

export const BottomClubNav = styled.nav`
  width: 70%;
  background-color: green;
  margin: 0 auto;
`;
