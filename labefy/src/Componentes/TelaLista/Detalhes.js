import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 28px;
    padding: 16px;
    font-size: 20px;
    color: #0E3C57;
`
const Botao = styled.button`
    padding: 12px 28px;
     margin: 24px;
    background-color: #0E3C57;
    color:#ff914d;
    border-radius: 12px;
    font-size: 20px;
`


export default class Detalhes extends React.Component {
    state = {
        musicas: [],
        nomeMusica: "",
        banda: "",
        link: ""
    }

    componentDidMount() {
        this.detalhesPlaylist()
    }

    detalhesPlaylist = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, {
            headers: {
                Authorization: "AnaJulia-Lopes-tang"
            }
        }).then((response) => this.setState({ musicas: response.data.result.tracks }))
            .catch((error) => { alert(`error.message`) })
    }

    alterarNomeMusica = (evento) => {
        this.setState({ nomeMusica: evento.target.value })
    }

    alterarBanda = (evento) => {
        this.setState({ banda: evento.target.value })
    }

    alterarLink = (evento) => {
        this.setState({ link: evento.target.value })
    }

    adicionarMusica = () => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.banda,
            url: this.state.link
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, body, {
            headers: {
                Authorization: "AnaJulia-Lopes-tang"
            }
        }).then((response) => {
            this.detalhesPlaylist()
            this.setState({ nomeMusica: "", banda: "", link: "" })
            alert("Música adicionada com sucesso")
        }).catch((error) => {
            alert("Ocorreu um problema, tente novamente! :)")
        })
    }

    render() {
        const musicas = this.state.musicas.map((musica) => {
            return (
                <div>
                    <p>{`Nome: ${musica.name}`}</p>
                    <p>{`Artista: ${musica.artist}`}</p>
                    <audio controls play pause>
                        <source src={musica.url} />
                    </audio>
                </div>
            )
        })

        return (
            <ContainerPrincipal>
                <div>
                    <h1>{this.props.nomePlaylist}</h1>
                    {musicas}
                </div>
                <div>
                    <h1>Adicionar Música</h1>
                    <h3>Nome da musica</h3>
                    <input value={this.state.nomeMusica} onChange={this.alterarNomeMusica} />
                    <h3>Banda/Artista</h3>
                    <input value={this.state.banda} onChange={this.alterarBanda} />
                    <h3>Link da música</h3>
                    <input valeu={this.state.link} onChange={this.alterarLink} />
                    <div>
                        <Botao onClick={this.adicionarMusica}>Adicionar</Botao>
                    </div>
                </div>
            </ContainerPrincipal>
        )
    }
}