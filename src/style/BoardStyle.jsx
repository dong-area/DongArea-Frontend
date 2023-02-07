import styled, { createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
        background-color: #1F1F1F;
    }
`;

export const RightImg = styled.div`
  position: fixed;
  right: 0;
  width: 40%;
  margin-right: 6%;
`;
export const Img = styled.img`
  width: 60rem;
  height: 100%;
  object-fit: cover;
`;
export const Title = styled.label`
  font-size: 1.825rem;
  color: #ffffff;
  font-family: "Nanum";

  display: flex;
  margin-top: 9.563rem;
  margin-left: 18.188rem;
`;

export const Post = styled.div`
  margin-left: 5.188rem;
`;

export const Each = styled.div`
  width: 50%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.687rem;
  margin-right: 2.625rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #d9d9d9;
`;

export const PostTitle = styled.label`
  color: #ffffff;
  font-size: 1.25rem;
`;

export const PostWriter = styled.label`
  color: #a7a7a7;
  font-size: 0.938rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: Flex;
  flex-direction: column;
`;

export const PostTop = styled.div`
  width: 50%;
  height: 1.125rem;
  background-color: #e7aa4a;
  border-radius: 5px 5px 0px 0px;
  margin-top: 1.563rem;
  margin-left: 0.687rem;
`;

export const PostBottom = styled.div`
  background-color: #e7aa4a;
  width: 50%;
  height: 0.3rem;
  margin-left: 0.687rem;
`;

export const WriteBtn = styled.button`
  width: 5rem;
  height: 5rem;
  background: none;
  border: none;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0rem 3rem 3rem 0rem;
`;
