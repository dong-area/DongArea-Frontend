import styled, { createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
        background-color: #000000;
    }
`

export const WholeTitle = styled.div`
    padding-top: 11.5rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-size: 6rem;
    font-weight: 600;
    color : ${(props)=>props.color};
`

