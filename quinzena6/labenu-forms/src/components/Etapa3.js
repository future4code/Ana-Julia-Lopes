import React from 'react';

class Etapa3 extends React.Component {
    render () {
       return (
           <div>
               <h1>Etapa 3 - Informações gerais de ensino</h1>
               <ol>
                   <li>Por quê você não terminou um curso de graduação?</li>
                   <input />
                   <li>Você fez algum curso complementar?</li>
                   <select>
                       <option>Curso técnico</option>
                       <option>Cursos de inglês</option>
                       <option>Não fiz curso complementar</option>
                   </select>
               </ol>
         </div>
       )
    }
  }
  export default Etapa3