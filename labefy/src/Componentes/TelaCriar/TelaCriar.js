import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerAdicionar = styled.div`
  display: flex;
  flex-direction:column;
  
  p{
    display:flex;
    justify-content: center;
    font-size: 24px;
    margin: 30px ;
    padding: 24px 0;
  }
`
const ContainerInput = styled.input`
  
  width: 30%;
  height: 50px;
  border-radius: 6px;
  margin: 0 35%;
`

const Botao = styled.button`
border-radius: 12px;
margin: 40px 45%;
font-size: 20px;
padding: 14px 40px;
background-color:#0E3C57;
color:#ff914d;

`
export default class TelaCriar extends React.Component {

  state = {
    nomePlaylist: " "
  }

  alterarNomePlaylist = (evento) => {
    this.setState({ nomePlaylist: evento.target.value })
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
      headers: {
        Authorization: "AnaJulia-Lopes-tang"
      }
    }).then((response) => {
      alert("Sua playlist foi criada! :)")
      this.setState({ nomePlaylist: " " })
    }).catch((error) => {
      alert("Algo deu errado, tente novamente!")
    })
  }

  render() {
    return (
      <div>
        <ContainerAdicionar>
          <p>Nome da playlist</p>
          <ContainerInput value={this.state.nomePlaylist} onChange={this.alterarNomePlaylist} />
        </ContainerAdicionar>
        <div>
          <Botao onClick={this.criarPlaylist}>Criar</Botao>
        </div>
      </div>
    );
  }
}