import styled from "styled-components";
import "./index.css";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  height: 4rem;
  display: flex;
`;

export const TitleNav = styled.nav`
  width: 50%;
  margin: 1.2rem auto;
  display: flex;
  justify-content: space-between;
`;

export const ContentSpan = styled.span`
  margin: 1rem 3rem;
  font-size: 1.2rem;
  position: absolute;
  color: #e7aa4a;
  font-weight: bold;
`;

export const ContentTitleSpan = styled.span`
  padding: 0rem 0.8rem;
  font-family: "Nanum";
  color: ${(props) => props.color};
  &:hover {
    border-bottom: solid 0.15rem ${(props) => props.color};
    padding-bottom: 1.4rem;
  }
`;
