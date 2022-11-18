import React from 'react'
import ReactLogo1 from './comp_ico.svg'
import ReactLogo2 from './design_ico.svg'
import './Style.css'


function Nomes() {

  return (
    <section id="creditos">
      <h2 className="tituloProjeto">Projeto Extensionista - LPII</h2>
      <div className="integrantesComp">
        <div className="integrantesTitulo comp">
          <img src={ReactLogo1} alt="" />
          <h2>Integrantes da Ciência da Computação</h2>
        </div>
        <ul>
          <li>Julio Cesar Cardoso</li>
          <li>Mateus Lopes Olivato</li>
          <li>Felipe Maiolino de Oliveira</li>
          <h4>Professor Me. Vinicius Santos Andrade</h4>
        </ul>
      </div>

      <div className="integrantesDesign">
        <div className="integrantesTitulo design">
          <h2>Integrantes do Design</h2>
          <img src={ReactLogo2} alt="" />
        </div>
        <ul>
          <li>Ana Carolina da Silva</li>
          <li>Anthony Massola Machado</li>
          <li>Andresa de Almeida</li>
          <li>Ingrid Buchignani de Oliveira</li>
          <h4>Professora Dra. Sileide Aparecida Paccola</h4>
        </ul>
      </div>
    </section>
  )
}

export default Nomes