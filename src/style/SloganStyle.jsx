import styled, { keyframes } from "styled-components";
import "./index.css";
const titleUp = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const SloganText = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-family: "Roboto";
  margin: ${(props) => props.margin};
  animation: ${titleUp} 1.5s;
  animation-fill-mode: forwards;
`;
