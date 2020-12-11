import React from 'react'
import { useHistory } from 'react-router-dom'

function HomePage() {
    const history = useHistory();

    const irParaLista = () => {
        history.push('/viagens')
    };
     
    const irParaFormulario = () => {
        history.push('/formulario')
    }

    const irParaLogin = () => {
        history.push('/login')
    }

    const irParaNovaViagem = () => {
        history.push('criarViagem')
    }

    const irParaDetalhesViagem = () => {
        history.push('detalhes')
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={irParaLista}>Lista de viagens</button>
            <button onClick={irParaFormulario}>Formulario</button>
            <button onClick={irParaLogin}>Login administrador</button>
            <button onClick={irParaNovaViagem}>Criar Viagem</button>
            <button onClick={irParaDetalhesViagem}>Detalher da viagem</button>
        </div>
    )
}

export default HomePage; 
