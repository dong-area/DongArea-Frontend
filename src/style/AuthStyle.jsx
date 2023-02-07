import styled from "styled-components";
import "../style/index.css";

export const Title = styled.p`
  border-left: 0.5rem solid #e7aa4a;
  padding-left: 1rem;
  font-size: 2.5rem;
`;

export const ExampleImg = styled.img`
  width: 26rem;
  display: block;
  margin: 8rem 0 -4rem 5rem;
`;

export const EntireBox = styled.nav`
  padding-top: 10%;
  width: 100%;
  height: 90%;
  position: fixed;
  background-color: #1f1f1f;
`;

export const CenterBox = styled.nav`
  font-weight: bold;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #fff;
  margin: ${(props) => props.margin};
  border-radius: 1.25rem;
  padding: 2rem;
  font-family: "Roboto";
  z-index: -2;
`;

export const InputSpan = styled.span`
  color: #e7aa4a;
  font-size: 1.25rem;
`;

export const InputBottomLine = styled.hr`
  width: 28rem;
  background-color: #e9e9e9;
  border: 1px solid #e9e9e9;
  box-shadow: 0rem 0.3rem 0.4rem rgba(0, 0, 0, 0.2);
`;

export const InputGroup = styled.div`
  margin: 0rem 1.6rem;
`;

export const InputTag = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  margin: 2rem 0rem 0rem 1rem;
  padding: 1rem;
  width: 18rem;
`;

export const SubmitButton = styled.button`
  font-family: "Roboto";
  box-shadow: none;
  border: none;
  font-size: 1.25rem;
  width: 6.25rem;
  height: 3.125rem;
  border-radius: 0.25rem;
  float: right;
  margin: ${(props) => props.margin};
  background-color: #1f1f1f;
  color: #d9d9d9;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  position: absolute;
`;

export const BackgroundFont = styled.p`
  display: inline-block;
  font-weight: 700;
  position: absolute;
  font-size: 37.5rem;
  line-height: 45.375rem;
  letter-spacing: 0.07em;
  z-index: -3;
  color: #c8c8c84f;
  margin: ${(props) => props.margin};
`;

export const BottomImg = styled.img`
  width: 23.75rem;
  padding: 4rem 2rem;
`;
