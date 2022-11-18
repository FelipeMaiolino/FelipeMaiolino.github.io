import React from 'react'
import ReactLogo1 from './comp_ico.svg'
import ReactLogo2 from './design_ico.svg'
import './Style.css'


function Nomes() {

  return (
    <div>
      <section className ="part">
        <div className ="comp">
          <img src={ReactLogo1} alt="" />
          <h2>Integrantes da Ciência da Computação</h2>
          <ul>
            <li>Julio Cesar Cardoso</li>
            <li>Mateus Lopes Olivato</li>
            <li>Felipe Maiolino de Oliveira</li>
          </ul>
          <h4>Professor Me. Vinicius Santos Andrade</h4>
        </div>
      </section>
      <section className ="part">
        <div className ="design">
          <img src={ReactLogo2} alt="" />
          <h2>Integrantes do Design</h2>
          <ul>
            <li>Ana Carolina da Silva</li>
            <li>Anthony Massola Machado</li>
            <li>Andresa de Almeida</li>
            <li>Ingrid Buchignani de Oliveira</li>
          </ul>
          <h4>Professora Dra. Sileide Aparecida Paccola</h4>
        </div>
      </section>
    </div>
  )
}

export default Nomes