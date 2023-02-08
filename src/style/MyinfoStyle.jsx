import styled,{createGlobalStyle} from "styled-components"

export const Body = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
        background-color: #1F1F1F;
    }
`

export const ProfileBox = styled.div`
    width: 55rem;
    height: 27rem;
    background-color: #1F1F1F;
    position: fixed;
    left: 7rem;
    top: 13rem;
    border-radius: 20px;

    display: flex;
    align-items: center;
`

export const WholeText = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid #FFFFFF;
    width: 25rem;
    margin-left: 3rem;
    margin-bottom: 1.5rem;
    justify-content: space-between;
`

export const ProfileImg = styled.img`
    margin-left: 8rem;
`

export const ProfileLabel = styled.label`
    color: #E7AA4A;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
`

export const ProfileText = styled.div`
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: 700;
`

export const LogoWholeDiv = styled.div`
    display: flex;
    align-items: flex-start;
`

export const RightImgDiv = styled.div`
    width: 60%;
    height: 100%;
    position:fixed;
    background-color: #000000;
`

export const RightImg = styled.img`
    position: fixed;
    right: 0;
    margin-right:33%;
    width:9%;
`

export const Logout = styled.img`
    position: relative;
    top:10rem;

`