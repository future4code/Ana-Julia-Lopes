import React from 'react';
import styled from 'styled-components';
import { CardProdutos } from './CardProdutos';

const CampoProdutos = styled.div`
    
`;

const MenuProdutos = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    padding: 0 8px;
`



export class Produtos extends React.Component {
    render() {
        return (
            <CampoProdutos>
                <MenuProdutos>
                    <p>Quantidade de produtos: 8</p>
                    <label>
                        Ordenar por:
                     <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </label>
                </MenuProdutos>
                <div>
                    <CardProdutos/>
                </div>
            </CampoProdutos>
        )
    }
}