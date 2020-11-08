import React from 'react';
import styled from 'styled-components';


const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    margin: 24px;
    padding: 36px;
    border: solid 2px black;
    row-gap: 24px;
`
const Produto = styled.div`
     display: grid;
     grid-template-rows: 1fr;
     justify-items: center;
     border: solid 2px black;
     margin: 24px;

    p{
       margin: 24px;
    }
`

const Botao = styled.button`
    border: none;
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 14px 16px;
    
`


export class CardProdutos extends React.Component {
    render() {
        return (

            <ContainerProdutos>
                <Produto>
                    <img src={"https://img.icons8.com/color/100/000000/star-wars-millenium-falcon.png"} />
                    <p>Millenium Falcon</p>
                    <p>R$ 50.000</p>
                    <Botao>Comprar</Botao>
                </Produto>
                <Produto>
                    <img src={"https://img.icons8.com/color/100/000000/star-wars-naboo-ship.png"} />
                    <p>Naboo Ship</p>
                    <p>R$ 20.000</p>
                    <Botao>Comprar</Botao>
                </Produto>
                <Produto>
                    <img src={"https://img.icons8.com/color/100/000000/star-wars-empire-ship.png"} />
                    <p>Empire Ship</p>
                    <p>R$ 80.000</p>
                    <Botao>Comprar</Botao>
                </Produto>
                <Produto>
                    <img src={"https://img.icons8.com/color/100/000000/star-wars-rebellion-ship.png"} />
                    <p>Rebellion Ship</p>
                    <p>R$ 100.000</p>
                    <Botao>Comprar</Botao>
                </Produto>
                <Produto>
                    <img src={"https://img.icons8.com/color/100/000000/upsilon-class-command-shuttle.png"} />
                    <p>Command Shutle</p>
                    <p>R$ 75.000</p>
                    <Botao>Comprar</Botao>
                </Produto>
                <Produto>
                    <img src={"https://img.icons8.com/dusk/100/000000/death-star.png"} />
                    <p>Death Star</p>
                    <p>R$ 115.000</p>
                    <Botao>Comprar</Botao>
                </Produto>
                <Produto>
                    <img src={"https://img.icons8.com/color/100/000000/imperial-star-destroyer.png"} />
                    <p>Imperial Star Destroyer</p>
                    <p>R$ 10.000</p>
                    <Botao>Comprar</Botao>
                </Produto>
                <Produto>
                    <img src={"https://img.icons8.com/color/100/000000/tie-fighter.png"} />
                    <p>Tie Fighter</p>
                    <p>R$ 15.000</p>
                    <Botao>Comprar</Botao>
                </Produto>

            </ContainerProdutos>




        )
    }
}