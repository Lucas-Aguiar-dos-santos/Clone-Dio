import React from 'react'

import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'
import { PiThumbsUp } from 'react-icons/pi'

import background from '../../assets/background.png'

const Card = ()=> {
  return (
    <CardContainer>
        <ImageBackground src={background}/>
        <Content>
            <UserInfo>
                <UserPicture  src='https://avatars.githubusercontent.com/u/124281861?v=4'/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projetp para curso de html e css</h4>
                <p>Projeto feito no curso de html e css no botcamp dio do global avanade</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <PiThumbsUp/> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}