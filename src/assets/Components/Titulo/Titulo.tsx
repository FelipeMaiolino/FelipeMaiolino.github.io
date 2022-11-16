import React from 'react'
import ReactLogo from './leaf-shape.svg'
import './Style.css'


function Titulo() {
  console.log(ReactLogo);
  return (
      <div className ="logoEtitulo">
        <img className ="logo" src={ReactLogo} alt="logo-generico" />
        <p className ="tituloLogo">Projeto Reger</p>
      </div>
  )
}

export default Titulo