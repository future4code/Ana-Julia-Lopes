import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://img.icons8.com/emoji/96/000000/woman-technologyst.png" 
          nome="Ana Julia Lopes" 
          descricao="Sou formada em ciências biológicas pela UNESP, campus Bauru. Sou do interior de São Paulo, tenho 26 anos. Fiz estágios na área de educação, com crianças e adolecentes. Trabalhei no CIEE por 3 meses como instrutora dos menores aprendizes, onde tive contato com pessoas de todas as idades e um amplo conhecimento em assusto que não conhecia de forma aprodundade. Estou cursando na Labenu o curso de Web front-end, cada dia me desenvolvendo mais em HTML, CSS, JavaScript e React."
        />

        <CardPequeno
          icone="https://img.icons8.com/fluent-systems-filled/24/000000/email.png"
          email="tang@labenu.com"
          endereco="Rua Borboleta Psicodélicas, 420"
        
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
