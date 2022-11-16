import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'


function MenuVertical() {

  return (
    <div className='mainMenu'>
      <ul className="menuH">
        <li><a><Link to='/'> O Projeto </Link></a></li>
        <li><a><Link to='/OQueFazemos'> Oque Fazemos </Link></a></li>
        <li><a><Link to='/ComoFazemos'> Como Fazemos </Link></a></li>
        <li><a><Link to='/Crescemos'> Crescemos </Link></a></li>
        <li><a><Link to='/OndeEstamos'> Onde Estamos </Link></a></li>
        <li><a><Link to='/Dicas'> Dicas </Link></a></li>
        <li><a><Link to='/Creditos'> Creditos </Link></a></li>
      </ul>
    </div>
  )
}

export default MenuVertical