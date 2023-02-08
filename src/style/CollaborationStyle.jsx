import styled, { createGlobalStyle, keyframes } from "styled-components";

const AniTitle1 = keyframes`
0%{
    padding-bottom:1rem;
    opacity: 0;
}100%{
    padding-bottom:0rem;
    opacity: 1;
}
`;

const AniTitle2 = keyframes`
0%{
    margin-left:-1rem;
    opacity: 0;
}100%{
    padding-left:0rem;
    opacity: 1;
}
`;

const AniTitle3 = keyframes`
0%{
    padding-top:1rem;
    opacity: 0;
}100%{
    padding-top:0rem;
    opacity: 1;
}
`;
export const Body = createGlobalStyle`
    body{
        width: 100%;
        height: 500%;
        background-color: #000000;
    }
`;

export const WholeTitle = styled.div`
  padding-top: 11.5rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export const Title1 = styled.div`
  font-size: 6rem;
  font-weight: 600;
  color: ${(props) => props.color};
  animation: ${AniTitle1} 1.5s 0s;
  animation-fill-mode: forwards;
`;
export const Title2 = styled.div`
  font-size: 6rem;
  font-weight: 600;
  color: ${(props) => props.color};
  animation: ${AniTitle2} 1.5s;
  opacity: 0;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;
export const Title3 = styled.div`
  font-size: 6rem;
  font-weight: 600;
  color: ${(props) => props.color};
  animation: ${AniTitle3} 1.5s;
  opacity: 0;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

export const Monitor = styled.img`
  width: 100%;
  margin-top: 40rem;
  position: absolute;
`;

export const MonitorInsideNavBar = styled.nav`
  margin: 50rem auto;
  position: absolute;
  display: flex;
  width: 89.5%;
  top: ${(props) => props.top}%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: space-between;
`;

export const MonitorInsideNav = styled.img`
  height: 14rem;
  width: 24.5rem;
  background-color: green;
`;
