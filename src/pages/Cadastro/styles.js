import styled from "styled-components";



export const Container = styled.main`
    width:100%;
    max-width:80%;
    margin: 0 auto;
    margin-top:120px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const Wrapper = styled.div`
    max-width:350px;
`

export const Column = styled.div`
    flex: ;
`

export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
`

export const Title = styled.h2`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:32px;
    width:420px;
    margin-bottom:20px;
    line-height:44px;
    color:#FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;

`

export const SubTitleLogin = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:400;
    font-size:18px;
    margin-bottom:35px;
    line-height:25px;
`

export const TermosText = styled.p`
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
`

export const LoginLink = styled.p`
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    color:white;

    span{
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 700;
        line-height: 19.07px;
        text-align: left;
        color:#23DD7A;
    }

`