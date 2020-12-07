import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Detalhes from './Detalhes'

const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  font-size: 24px;
`
const ContainerNome = styled.div`
  margin: 24px;
  padding: 8px;
`
const Botaos = styled.button`
  padding: 12px 28px;
  margin: 24px;
  background-color: #0E3C57;
  color:#ff914d;
  border-radius: 12px;
  font-size: 20px;
`


export default class TelaLista extends React.Component {
  state = {
    listaPlaylist: [],
    irParaDetalhes: "",
    nomePlaylist: ""
  }

  componentDidMount() {
    this.adicionarPlaylist()
  }

  adicionarPlaylist = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "AnaJulia-Lopes-tang"
      }
    }).then((response) => this.setState({ listaPlaylist: response.data.result.list }))
      .catch((error) => { alert(`Foi aqui ${error.message}`) })
  }

  deletarPlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: "AnaJulia-Lopes-tang"
      }
    }).then(() => {
      this.adicionarPlaylist()
      alert("Playlist deletada!")
    })
      .catch((error) => { alert(error.message) })
  }

  irParaDetalhes = (id, name) => {
    this.setState({ irParaDetalhes: id, nomePlaylist: name })
}

  render() {
    const renderizaTelaDePlaylists = this.state.listaPlaylist.map((playlist) => {
      return (
        <ContainerPrincipal>
          <ContainerNome>
            {playlist.name}
          </ContainerNome>
          <div>
            <Botaos onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</Botaos>
          </div> 
          <div>
            <Botaos onClick={() => this.irParaDetalhes(playlist.id, playlist.name)}>Detalhes</Botaos>
            </div>
        </ContainerPrincipal>)
    })
    return (
      <div>
        {(this.state.irParaDetalhes === "" && this.state.nomePlaylist === "") ? renderizaTelaDePlaylists : <Detalhes nomePlaylist={this.state.nomePlaylist} playlistId={this.state.irParaDetalhes}/>}
      </div>
    );
  }
}