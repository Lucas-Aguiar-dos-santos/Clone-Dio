
import {Header} from '../../components/Header'

import { useNavigate } from 'react-router-dom'

import {Container, TextContent, Title, TitleHighLight} from './styles'

import Banner from '../../assets/Banner.png'
import { Button } from '../../components/Button'

const Home = ()=>{

    const navigate = useNavigate();

    const handleClickSingIn= ()=>{
        navigate('/login')
    }



    return(<> 
    <Header />
    <Container>
        <div>
            <Title>
                <TitleHighLight>Implemente</TitleHighLight>
                <br/>
                O seu futuro global agora! 
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar" variant='secondary' onClick={handleClickSingIn}/>
        </div>
        <div>
            <img src={Banner} alt='Imagem principal' />
        </div>
    </Container>

    </>
)
}


export {Home}