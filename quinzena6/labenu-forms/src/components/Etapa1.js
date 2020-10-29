import React from 'react';

class Etapa1 extends React.Component {

    render () {
       return (
           <div>
               <h1>Qual o seu nome?</h1>
               <ol>
                   <li>Qual o seu nome?</li>
                   <input />
                   <li>Qual sua idade?</li>
                   <input />
                   <li>Qual seu email?</li>
                   <input />
                   <li>Qual a sua escolaridade?</li>
                   <select>
                       <option>Ensino médio completo</option>
                       <option>Ensino médio incompleto</option>
                       <option>Superior incompleto</option>
                       <option>Superior completo</option>
                   </select>
               </ol>
         </div>
       )
    }
  }
  export default Etapa1
