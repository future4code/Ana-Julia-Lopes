import React from 'react'
import styled from 'styled-components'


const ImagemPessoa = styled.img`
    width: 420px;
    height: 450px;
    margin: 8px;
    display:block;
    border-radius: 6px;
    border: solid 2px #002f6c;
`
const TextoPessoa = styled.p`
    font-size: 32px;
    margin: 10px;
    padding: 4px;
    color: #002f6c;

`
const InfoPessoa = styled.p`
    font-size: 20px;
    margin: 10px;
    padding: 4px;
    color: #002f6c;
`

function Pessoa(props) {
    return (
        <div>
            <ImagemPessoa src={props.perfil.photo} />
            <TextoPessoa>{props.perfil.name} , {props.perfil.age}</TextoPessoa>
            <InfoPessoa>{props.perfil.bio}</InfoPessoa>

        </div>
    )
}

export default Pessoa