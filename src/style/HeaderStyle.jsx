import styled from "styled-components";
import "./index.css";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  height: 4rem;
  display: flex;
  z-index: 1;
  /* backdrop-filter: blur(20px); */
`;

export const TitleNav = styled.nav`
  width: 50%;
  margin: 1.2rem auto;
  display: flex;
  justify-content: space-between;
`;

export const ContentSpan = styled.span`
  margin: 2rem 3rem;
  font-size: 1.8rem;
  position: absolute;
  color: #e7aa4a;
  font-weight: bold;
`;

export const ContentTitleSpan = styled.span`
  padding: 1rem 0.8rem;
  font-family: "Nanum";
  font-size: 1.2rem;
  color: ${(props) => props.color};
  &:hover {
    border-bottom: solid 0.15rem ${(props) => props.color};
    padding-bottom: 1.4rem;
  }
`;

export const NotiIcon = styled.img`
  width: 1.875rem;
  height: 2.313rem;
  margin-right: 2rem;
  margin-top: 1.5rem;

`