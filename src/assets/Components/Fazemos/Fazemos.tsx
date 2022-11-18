import React from 'react'
import './Style.css'
import imagem from './esg-strategy-business-success-1350x974-1 (1).jpg'

function Fazemos() {

  return (
    <section id="oQuefazemos">
      <div className="OqfBody">
      <img src={imagem} alt="" />
        <div className="listaOqF">
          <h2>Oque fazemos</h2>
          <p>O projeto REGER trabalha com o diagnóstico de situações envolvendo o descarte de resíduos a criação e implementação de propostas para tornar o processo de separação e eliminação o mais eficaz possível, a incorporação de diversos meios de alteração de mentalidade e hábitos prejudiciais.
            Estão entre as iniciativas do projeto: </p>
          <br/>
          <ul>
            <li>Diagnóstico dos resíduos gerados</li>
            <li>Coleta de resíduos</li>
            <li>Compostagem</li>
            <li>Identidade visual dos locais de descarte</li>
            <li>Divulgação, Capacitação e Conscientização</li>
            <li>Mudança de paradigmas e Incorporação de rotina</li>
            <li>Implementação de propostas de redução dos resíduos</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Fazemos