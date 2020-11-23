import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const ContainerPrincipal = styled.div`
    color:#000824;
    display: flex;
    justify-content: center;
    margin: 24px;
`

const ContainerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    font-size: 20px;

    input{
        width: 50%;
        margin: 12px 0px ;
        padding: 8px;
        border: solid 2px #000824;
        
    }
`
const Botao = styled.button`
    background-color: #69828C;
    color: #000824;
    margin: 16px 24px;
    padding: 16px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 8px;
    width: 40%;

`

export default class Cadastro extends React.Component {
    state = {
        nome: " ",
        email: " "
    }

    alterarNome = (evento) => {
        this.setState({ nome: evento.target.value })
    }

    alterarEmail = (evento) => {
        this.setState({ email: evento.target.value })
    }

    cadastrarUsuario = () => {
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "AnaJulia-Lopes-tang"
            }
        }).then((response) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({ name: " ", })
            this.setState({ email: " " })
        }).catch((error) => {
            alert(error.message)
        })
    }


    render() {
        return (
            <ContainerPrincipal>
                <ContainerCadastro>
                    <p>Nome:</p>
                    <input valeu={this.state.nome} onChange={this.alterarNome} />

                    <p>E-mail:</p>
                    <input value={this.state.email} onChange={this.alterarEmail} />

                    <Botao onClick={this.cadastrarUsuario}>Enviar</Botao>
                </ContainerCadastro>
            </ContainerPrincipal>
        )
    }
}