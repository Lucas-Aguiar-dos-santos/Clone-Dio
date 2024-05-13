import React from "react";
import logo from "../../assets/logo-dio.png"
import {Button} from '../Button'

import {UserPicture} from '../Card/styles'

import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
} from './styles'


import { useNavigate } from "react-router-dom";





const Header = ({autenticado})=>{
    const navigate = useNavigate();

    const home = ()=>{
        navigate('/')
    }

    const handleClickSingIn = ()=>{
        navigate('/login')
    }

    const criarAcont = ()=>{
        navigate('/Cadastro') 
    }

    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} onClick={home} alt="Logo da Dio" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                        <Input placeholder="Buscar ..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                    <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/124281861?v=4" />
                    </>) : (
                        <>
                        <MenuRight href="" onClick={home}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSingIn} />
                        <Button title="Cadastrar" onClick={criarAcont}/>
                        </>
                    )}

                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}