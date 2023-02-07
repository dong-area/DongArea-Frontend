import styled,{createGlobalStyle} from 'styled-components'

export const Body = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
        background-color: #1F1F1F;
    }
`

export const RightImg = styled.div`
    display:flex;
    justify-content: flex-end; 
    position:fixed;
    width:100%;
`
export const Img = styled.img`
    width: 60rem;
    height: 100%;
    object-fit: cover;
`
export const Title = styled.label`
    font-size: 1.825rem;
    color: #FFFFFF;
    font-family: "Nanum";

    display: flex;
    margin-top: 9.563rem;
    margin-left: 18.188rem;
`

export const Post = styled.div`
    margin-left: 5.188rem;
`

export const Each = styled.div`
    width: 54rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.687rem;
    margin-right: 2.625rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #D9D9D9;
`

export const PostTitle = styled.label`
    color: #FFFFFF;
    font-size: 1.25rem;
`

export const PostWriter = styled.label`
    color: #A7A7A7;
    font-size: 0.938rem;
`

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:Flex;
    flex-direction:column;
`


export const PostTop = styled.div`
    width: 55rem;
    height: 1.125rem;
    background-color: #E7AA4A;
    border-radius: 5px 5px 0px 0px;
    margin-top: 1.563rem;
`

export const PostBottom = styled.div`
    background-color: #E7AA4A;
    width: 54rem;
    height: 0.3rem;
    margin-left: 0.687rem;
`

export const WriteBtn = styled.button`
    width: 5rem;
    height: 5rem;
    background: none;
    border: none;
    position: relative;
    left: 115rem;
    top: 30rem;
`