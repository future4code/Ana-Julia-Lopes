import React from 'react';
import Cadastro from './Components/Cadastro';
import Lista from './Components/Lista';
import styled from 'styled-components';

const BotaoTrocaDeTela = styled.button`
    background-color: #69828C;
    color: #000824;
    margin: 16px;
    padding: 8px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 8px;
    width: 10%;
`
const Header = styled.div`
    height: 10%;
    background-color: #B7E9FF;
    display: flex;
    justify-content: space-between;
`
const TextoCadastro = styled.h1`
    margin: 16px;
    padding: 8px;
    color: #000824;
`

class App extends React.Component {
  state = {
    cadastrarUsuarios: true
  }

  trocarDeTela = () => {
    this.setState({ cadastrarUsuarios: !this.state.cadastrarUsuarios })
  }

  render() {
    return (
      <div>
        <Header>
          <TextoCadastro>CadastrAqui</TextoCadastro>
          <BotaoTrocaDeTela onClick={this.trocarDeTela}>
            {this.state.cadastrarUsuarios ? "Ir para lista de usuários" : "Ir para cadasto"}
          </BotaoTrocaDeTela>
        </Header>
        {this.state.cadastrarUsuarios ? <Cadastro /> : <Lista />}
      </div>
    );
  }

}

export default App;
