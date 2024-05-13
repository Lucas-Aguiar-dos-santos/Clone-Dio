import {Header} from '../../components/Header';

import { MdEmail } from 'react-icons/md';
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


import { useNavigate } from 'react-router-dom';


import { Button } from '../../components/Button';
import {Column, Container, Title, Wrapper, TitleCadastro, SubTitleLogin, TermosText, Row, LoginLink} from './styles';

import { Input } from '../../components/Input';
import axios from 'axios';





const schema = yup
  .object({
    user: yup.string().required('campo requerido'),
    email: yup.string().email('email não é valido').required('campo requerido'),
    password: yup.string().min(3,"No minimo 3 caracteres").required('campo obrigatorio'),
  })
  .required()



const Cadastro = ()=>{

    const {  control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async FormData => {
            try{    
                 await axios.post('http://localhost:8001/users', FormData)

            }catch{
                alert('erro')
            }
    }


    const navigate = useNavigate()

    const login = ()=>{
        navigate('/login')
    }

    return(
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="user" errorMessage={errors?.name?.message}    control={control}  placeholder='Nome de usuário' leftIcon={<FaUser/>}/>

                            <Input name="email" errorMessage={errors?.email?.message}    control={control}  placeholder='E-mail' leftIcon={<MdEmail/>}/>

                            <Input name="password"  errorMessage={errors?.password?.message} control={control}  placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
                            <Button title="Cadastrar" variant='secondary'  type="submit"/>
                        </form>
                        <Row>
                            <TermosText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermosText>
                        </Row>
                        <Row>
                            <LoginLink>Já tenho conta. <span onClick={login}>Fazer login</span></LoginLink>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export {Cadastro}