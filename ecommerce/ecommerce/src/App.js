import React from 'react';
import { Filtro } from './componentes/Filtro/Filtro';
import { Carrinho } from './componentes/Carrinho/Carrinho';
import { Produtos } from './componentes/Produtos/Produtos';
import { CardProdutos } from './componentes/Produtos/CardProdutos';
import styled from 'styled-components';

const Header = styled.div`
  background-color: black;
  height: 100px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Filtro />
        <Produtos />
        <Carrinho/>
      </Container>
    </div>

  );
}

export default App;
