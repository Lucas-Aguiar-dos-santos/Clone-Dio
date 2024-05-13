import { MdEmail } from 'react-icons/md';
import { MdLock } from "react-icons/md";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {Header} from '../../components/Header';

import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api} from '../../services/api'

import {Container, Column, CriarText, EsqueciText,Row , SubTitleLogin, Title, TitleLogin, Wrapper} from './styles';


const schema = yup
  .object({
    email: yup.string().email('email não é valido').required('compo requerido'),
    password: yup.string().min(3,"No minimo 3 caracteres").required('campo obrigatorio'),
  })
  .required()



const Login = ()=>{

    const navigate = useNavigate();

    const criarAcont = ()=>{
        navigate('/Cadastro') 
    }


    const {  control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

   console.log( errors );  

   


    const onSubmit = async FormData => {
            try{    
                const { data } =  await api.get(`users?email=${FormData.email}&password=${FormData.password}`)
                if(data.length === 1){
                     navigate('/feed')
                }else{
                    alert('email ou senha inválido')
                }
            }catch{
                alert('erro')
            }
    }




    return(<> 
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message}    control={control}  placeholder='E-mail' leftIcon={<MdEmail/>}/>
                    <Input name="password"  errorMessage={errors?.password?.message} control={control}  placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant='secondary'  type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={criarAcont}>Criar Conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>

    </>
)
}


export {Login}