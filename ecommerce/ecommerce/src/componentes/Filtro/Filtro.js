import React from 'react';
import styled from 'styled-components'

const CampoFiltro = styled.div`
    margin: 8px;
`

const FiltroBuscaContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:  8px;
    padding: 8px;
`
const Botao = styled.button`
    text-align: center;
    text-decoration: none;
    margin-left: 16px;
    padding: 8px 16px;
    font-size: 16px;
`


export class Filtro extends React.Component {
    render() {
        return (
            <CampoFiltro>
                <h2>Filtrar por:</h2>
                <div>
                    <FiltroBuscaContainer>
                    Valor Máximo
                    <input type='number' />
                    </FiltroBuscaContainer>
                </div>

                <div>
                    <FiltroBuscaContainer>
                    Valor Máximo
                    <input type='number' />
                    </FiltroBuscaContainer>
                </div>

                <Botao>Filtrar</Botao>

                <h2>Buscar produto:</h2>
                <FiltroBuscaContainer>
                    <input type='text' />
                </FiltroBuscaContainer>
                <Botao>Buscar</Botao>
            </CampoFiltro>
        )
    }
}