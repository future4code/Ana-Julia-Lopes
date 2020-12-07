import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ContainerLista from './ContainerLista'

const Imagem = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin: 10px;
`
const Nome = styled.p`
    font-size: 20px;
    color: #002f6c;
    margin: 10px;

`
function ListaMatches(props) {
    
    return (
        <div>
            <Imagem src={props.perfil.photo}/>
            <Nome>{props.perfil.name}</Nome>
        </div>
    )
}

export default ListaMatches