import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import imagemDanca from './imagemDanca.png'

const ContainerPrincipal = styled.div`
  background-color:#E1E5DF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  
  p{
  margin-top: 60px;
  padding: 24px;
  }
`

export default class TelaInicial extends React.Component {
  render() {
    return (
      <div>
        <ContainerPrincipal>
          <p>Crie suas playlists para todos os momentos!</p>
          <img src={imagemDanca}  alt=' logo'/>
        </ContainerPrincipal> 
      </div>
    );
  }
}