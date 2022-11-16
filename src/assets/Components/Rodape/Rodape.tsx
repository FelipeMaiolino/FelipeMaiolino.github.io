import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'


function Rodape() {

  return (
    <div className="rodape">
        <div className="logoUNISAGRADO"></div>
        <div className="social">
          <p>SOCIAL</p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/unisagrado_oficial/"
                target="blank"
                >Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/UNISAGRADOBauru/" target="blank"
                >Facebook</a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/UNISAGRADO" target="blank"
                >Youtube</a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@unisagrado" target="blank"
                >TikTok</a>
            </li>
          </ul>
        </div>
        <div className="footerMenu">
          <p>MENU</p>
          <ul>
            <li><Link to='/'> O Projeto </Link></li>
            <li><a><Link to='/OQueFazemos'> Oque Fazemos </Link></a></li>
            <li><a><Link to='/ComoFazemos'> Como Fazemos </Link></a></li>
            <li><a><Link to='/Crescemos'> Crescemos </Link></a></li>
            <li><a><Link to='/OndeEstamos'> OndeEstamos </Link></a></li>
            <li><a><Link to='/Dicas'> Dicas </Link></a></li>
            <li><a><Link to='/Creditos'> Creditos </Link></a></li>
          </ul>
        </div>
      </div>
  )
}

export default Rodape