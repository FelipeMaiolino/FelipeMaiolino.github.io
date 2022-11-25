import React from 'react'
import videoBG from './videoBG.mp4'
import './Style.css'

function IntroReger() {

  return (     
    <section className="introducao">
      <div className="introReger">
        <p id="regerP1">desenvolvimento <u>sustentável</u><br/> &nbsp;&nbsp;&nbsp;&nbsp; <span id="plusSymbol">+</span> responsabilidade social</p><br/>
      </div>
      <div className="divCartilha">
        <a className="linkCartilha" href="https://unisagrado.edu.br/custom/2008/uploads/institucional/divulgacao/Cartilha_REGER.pdf" target="blank">Dicas</a>
        <p>Baixe nossa Cartilha</p>
      </div>
    </section>
  )
}

export default IntroReger