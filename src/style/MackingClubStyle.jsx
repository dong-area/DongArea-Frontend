import styled from "styled-components";
import "./index.css";

export const TextArea = styled.textarea`
  resize: none;
  width: 96%;
  padding: 2%;
  height: 10.375rem;
  color: white;
  border: 2px solid white;
  background-color: transparent;
`;

export const BackGroundBox = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
`;

export const MainBox = styled.nav`
  width: 36.625rem;
  height: 36.625rem;
  padding: 4rem;
  margin: 10rem auto;
  background-color: #585757;
  border-radius: 0.5rem;
`;

export const MainTitle = styled.p`
  text-align: center;
  font-size: 1.875rem;
  color: #fff;
  font-family: "Nanum";
  margin-bottom: 2rem;
`;

export const TitleHr = styled.hr`
  border: 0.2rem solid #e7aa4a;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: 2rem;
`;

export const InputSpan = styled.span`
  color: #e7aa4a;
  font-size: 1.25rem;
`;
export const Info = styled.p`
  color: #e7aa4a;
  font-size: 1.25rem;
  margin: 0.5rem 0rem 1rem 0.5rem;
`;

export const InfoNav = styled.nav`
  padding-top: 2rem;
`;

export const InputBottomLine = styled.hr`
  width: 20rem;
  background-color: #e9e9e9;
  border: 1px solid #e9e9e9;
  box-shadow: 0rem 0.3rem 0.4rem rgba(0, 0, 0, 0.2);
  border-radius: 5rem;
`;

export const InputGroup = styled.div`
  margin: 0rem 20%;
`;

export const InputTag = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  margin: 1rem 0rem 0rem 1rem;
  padding: 1rem;
  width: 14rem;
`;

export const InputNav = styled.span`
  margin: 0rem auto;
`;

export const InputFile = styled.div`
  width: 8rem;
  padding: 0.5rem 0;
  text-align: center;
  background-color: transparent;
  margin: 1rem 0rem;
  border: 0.2rem solid #e7a809;
  color: #e7a809;
  font-family: "Nanum";
`;

export const InputFileNone = styled.input`
  display: none;
`;

export const UploadBtn = styled.button`
  font-size: 1.2rem;
  box-shadow: none;
  border: none;
  width: 6.25rem;
  height: 2.75rem;
  color: #fff;
  background-color: #e7a809;
  box-shadow: 0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.2);
  float: right;
`;

export const BackGroundImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const SideBar = styled.div`
  position: fixed;
  height: 100%;
  width: 2.75rem;
  background-color: #e7a809;
  right: 0px;
`;
