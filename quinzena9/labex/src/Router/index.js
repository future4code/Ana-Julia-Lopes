import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/Publico/HomePage';
import ListaViagem from '../components/Publico/ListaViagem';
import Formulario from '../components/Publico/Formulario';
import LoginPagina from '../components/Privado/LoginPagina';
import DetalhesViagem from '../components/Privado/DetalhesViagem';
import CriarViagem from '../components/Privado/CriarViagem';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>

                <Route exact path= '/viagens'>
                    <ListaViagem/>
                </Route>

                <Route exact path= '/formulario'>
                    <Formulario/>
                </Route>

                <Route exact path='/login'>
                    <LoginPagina/>
                </Route>

                <Route exact path='criarViagem'>
                    <CriarViagem/>
                </Route>

                <Route exact path='detalhes'>
                    <DetalhesViagem />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;