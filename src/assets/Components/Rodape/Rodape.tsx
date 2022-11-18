import React from 'react'
import { Link } from 'react-router-dom'
import FaceBook from './icons8-facebook.svg'
import instagram from './icons8-instagram.svg'
import tiktok from './icons8-tiktok.svg'
import youtube from './icons8-youtube.svg'
import logounisagrado from './logounisagrado.png'
import './Style.css'


function Rodape() {

  return (
    <div className="rodape">
      <div className="logoUNISAGRADO">
        <img src={logounisagrado} alt="" />
      </div>
      <div className="social">
        <p>SOCIAL</p>
        <ul>
          <li className="socialIcon instagram">
          <img src={instagram} alt="" />
            <a href="https://www.instagram.com/unisagrado_oficial/" target="blank">Instagram</a>
          </li>
          <li className="socialIcon facebook">
          <img src={FaceBook} alt="" />
            <a href="https://www.facebook.com/UNISAGRADOBauru/" target="blank">Facebook</a>
          </li>
          <li className="socialIcon youtube">
          <img src={youtube} alt="" />
            <a href="https://www.youtube.com/c/UNISAGRADO" target="blank">Youtube</a>
          </li>
          <li className="socialIcon tiktok">
          <img src={tiktok} alt="" />
            <a href="https://www.tiktok.com/@unisagrado" target="blank">TikTok</a>
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