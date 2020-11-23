import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TelaInicial from './Componentes/TelaInicial/TelaInicial';
import TelaCriar from './Componentes/TelaCriar/TelaCriar';
import TelaLista from './Componentes/TelaLista/TelaLista';
import labefy from './Imagem/labefy.png'

const Header = styled.header`
    width: 100%;
    height: 100px;
    background-color: #ff914d;
    display:flex;
    justify-content: space-between;
    
`
const BotaoMenu = styled.button`
    border: solid 1px #0E3C57;
    border-radius: 8px;
    background-color: #ff914d;
    color: #0E3C57;
    font-size: 18px;
    margin: 16px;
    padding: 16px;
    
`

class App extends React.Component {
  state = {
    telaAtual: "tela inicial"
  }

  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "cria playlist" })
  };

  irParaListaPlaylist = () => {
    this.setState({ telaAtual: "lista playlists" })
  }

  irParaTelaInicial = () => {
    this.setState({ telaAtual: "tela inicial" })
  }

  render() {
    const rederizarTelaCorreta = () => {
      switch (this.state.telaAtual) {
        case "tela inicial":
          return <TelaInicial />;
        case "cria playlist":
          return <TelaCriar />;
        case "lista playlists":
          return <TelaLista />;
        default:
          return alert("Tente novamente!")
      }
    }
    return (
      <div>
        <Header>
          <img src={labefy}  alt=' logo'/>
          <div>
            <BotaoMenu onClick={this.irParaTelaInicial}>Tela Inicial</BotaoMenu>
            <BotaoMenu onClick={this.irParaCriarPlaylist}>Criar Playlist</BotaoMenu>
            <BotaoMenu onClick={this.irParaListaPlaylist}>Lista de Playlists</BotaoMenu>
          </div>
        </Header>
        {rederizarTelaCorreta()}
      </div>
    );
  }
}

export default App;
