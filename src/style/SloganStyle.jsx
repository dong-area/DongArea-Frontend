import styled from "styled-components";
import "./index.css";

export const SloganText = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-family: "Roboto";
  margin: ${(props) => props.margin};
`;
