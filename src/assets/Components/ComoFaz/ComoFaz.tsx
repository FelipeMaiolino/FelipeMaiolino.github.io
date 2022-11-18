import React from 'react'
import './Style.css'
import imagem from './RE3.png'

function ComoFaz() {

  return (
    <section id="comoFazemos">
      <div className="comoFazemosBody">
        <div>
          <h2>Como Fazemos</h2>
          <p>O projeto Reger atua em ações de fiscalização e orientação do descarte correto de resíduos nos setores administrativos da instituição, bem como realiza capacitações com os funcionários e estudantes para relembrar alguns conceitos de sustentabilidade e descarte dos resíduos. <br/> <br/>
            Fazemos isso através de palestras e cursos a toda a comunidade acadêmica, coletamos e destinamos também os resíduos orgânicos para uma central de compostagem diariamente, padronizamos a impressão de documentos de maneira que se gaste menos tintas e papeis no processo e claro que acompanhamos todos os relatórios minuciosamente a respeito das ações promovidas pelo projeto.
          </p>
        </div>
        <img src={imagem} alt="" />
      </div>
    </section>
  )
}

export default ComoFaz