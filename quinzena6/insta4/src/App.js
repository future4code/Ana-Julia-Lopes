import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Kleber'}
          fotoUsuario={'https://picsum.photos/id/1005/50/50'}
          fotoPost={'https://picsum.photos/id/1062/200/150'}
        />

        <Post
          nomeUsuario={'Pablo'}
          fotoUsuario={'https://picsum.photos/id/177/50/50'}
          fotoPost={'https://picsum.photos/id/180/200/150'}
        />
      </div>
    );
  }
}

export default App;
