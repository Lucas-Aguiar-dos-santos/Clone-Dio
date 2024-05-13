
import {Header} from '../../components/Header'

import {Container, Column, Title, TitleHighLight} from './styles'
import {UserInfo} from '../../components/userInfo'

import { Card } from '../../components/Card/indes'

const Feed = ()=>{
    return(<> 
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Column>
        <Column flex={1}>
            <TitleHighLight># Ranking 5 top da semana</TitleHighLight>
            <UserInfo   percentual={50} nome="Lucas Aguiar" image="https://avatars.githubusercontent.com/u/124281861?v=4" />
            <UserInfo   percentual={65} nome="Lucas Aguiar" image="https://avatars.githubusercontent.com/u/124281861?v=4" />
            <UserInfo   percentual={25} nome="Lucas Aguiar" image="https://avatars.githubusercontent.com/u/124281861?v=4" />
            <UserInfo   percentual={15} nome="Lucas Aguiar" image="https://avatars.githubusercontent.com/u/124281861?v=4" />
    
        </Column>
    </Container>

    </>
)
}


export {Feed}