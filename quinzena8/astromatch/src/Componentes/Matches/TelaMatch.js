import React, {useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import Pessoa from './Pessoa';


const Container = styled.div`
    margin: 24px 500px;
`
const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[300],
      }
    }
});
  
const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`


function TelaMatch() {

    const [escolherPessoa, setEscolherPessoa] = useState({})

    const perfilEscolhido = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AnaJulia/person').then(response => {
            setEscolherPessoa(response.data.profile)
        })
    }
   
    useEffect(() => {
            perfilEscolhido()
    }, [])
    
    const naoCurti = () => {
        const body = {
            choice: false,
            id: escolherPessoa.id
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AnaJulia/choose-person', body).then(response => {
            perfilEscolhido()
        })
    }

    const curti = () => {
        const body = {
            choice: true,
            id: escolherPessoa.id
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AnaJulia/choose-person', body).then(response => {
            perfilEscolhido()
        })
    }

    
    return (
        <ThemeProvider theme={theme}>
        <Container>
            <div>
                    <Pessoa perfil={escolherPessoa }/>
            </div>
            <ContainerButtons>
                <Button variant="contained" color="primary" onClick={naoCurti}>
                        <CloseIcon/>
                </Button>
                <Button variant="contained" color="primary" onClick={curti}>
                        <FavoriteIcon/>
                </Button> 
            </ContainerButtons>
        </Container>
        </ThemeProvider>           
    )
}

export default TelaMatch;