import React, { useState } from 'react';
import TelaMatch from './Componentes/Matches/TelaMatch';
import ContainerLista from './Componentes/ListaMatch/ContainerLista';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[300],
    }
  }
});

const Header = styled.header`
  height: 50px;
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
function App() {
  const [TelaInicial, setTelaInicial] = useState(true)

  const IrTelaInicial = () => {
    setTelaInicial(true)
  }

  const IrTelaLista = () => {
    setTelaInicial(false)
  }
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Button variant="contained" color="primary" onClick={IrTelaLista} >
          Lista de Matches
      </Button>
      <Button variant="contained" color="primary" onClick={IrTelaInicial} >
          Tela de Match
      </Button>
      </Header>
      {TelaInicial ? <TelaMatch /> : <ContainerLista />}
    </ThemeProvider>
  );
}

export default App;
