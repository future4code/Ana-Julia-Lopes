import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerUsuarios = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    margin: 24px;
    width: 20%;
    font-size: 24px;
`
const BotaoDeletar = styled.button`
    background-color: #69828C;
    color: #000824;
    padding: 16px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 8px;
    width: 50%;
`

export default class Lista extends React.Component {
    state = {
        listaUsuarios: []
    }

    componentDidMount() {
        this.adicionarUsuario()
    }

    adicionarUsuario = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "AnaJulia-Lopes-tang"
            }
        }).then((response) => this.setState({listaUsuarios: response.data}))
            .catch((error) => {alert(error.message)})
    }

    deletarUsuario = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "AnaJulia-Lopes-tang"
            }
        }).then(() => {
            this.adicionarUsuario()
            alert("Usuário deletado!")
        })
         .catch((error) => {alert(error.message)})
    }

    render() {
        const rendezirarListaUsuarios = this.state.listaUsuarios.map((usuario) => {
            return (
                <ContainerUsuarios>
                    {usuario.name}
                    <BotaoDeletar onClick={ () => this.deletarUsuario(usuario.id)}>Excluir</BotaoDeletar>
                </ContainerUsuarios>)
        })
        return (
            <div>
                    {rendezirarListaUsuarios}
            </div>
        )
    }
}