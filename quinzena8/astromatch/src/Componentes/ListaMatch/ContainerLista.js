import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListaMatches from './ListaMatches'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const Container = styled.div`
    border: 2px black solid;
    height: 500px;
    width: 490px;
    margin: 24px 450px;
`
const Footer = styled.footer`
    display: flex;
    justify-content: center;
`
const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[300],
      }
    }
});
  
function Lista() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AnaJulia/matches').then(response => {
         setMatches(response.data.matches)
        })
    }, [])

    const limparLista = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AnaJulia/clear').then(response => {
            console.log(response)
        })
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Container>
                {matches.map((profile) => {
                    return <ListaMatches perfil={profile}/>
                })}
            </Container>
            <Footer>
            <Button variant="contained" color="primary" onClick={limparLista}>
                Limpar matches
            </Button>  
            </Footer>  
              
        </ThemeProvider>
    )
}

export default Lista;