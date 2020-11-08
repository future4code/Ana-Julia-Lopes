import React from 'react';
import styled from 'styled-components';
import Styled from 'styled-components'

const ItensCarrinho = styled.div` 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin:  8px;
        padding: 8px;

`

export class Carrinho extends React.Component {
    render() {
        return (
            <div>
                <h2>Carrinho</h2>
                <ItensCarrinho>
                    <p>Quantidade:</p>
                    <p>Produto:</p>
                    <button>Remover</button>
                    <p>Total da compra: R$ 0,00 </p>
                </ItensCarrinho>

            </div>
        )

    }
}