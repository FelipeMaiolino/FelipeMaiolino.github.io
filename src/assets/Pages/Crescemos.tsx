import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'

function Crescemos() {

  return (
    <html>
      <body>
        <header>
          <Titulo />
          <nav>
            <MenuVertical />
          </nav>
        </header>
        <main>
          <h2 className='tituloProjeto'>Crescemos</h2>
          <p className="paragrafo">
            Desde 2016 (Ano em que o projeto foi criado) até atualmente, o projeto cresceu de maneira extremamente satisfatória.
            O que começou com um projeto simples de coleta de resíduos sólidos e pesquisa a respeito dos mesmos gerados no espaço da universidade rapidamente evoluiu para outras propostas como a maneira que diminuímos o consumo de papel e copos descartáveis de toda a instalação e apresentamos o projeto oficialmente à SECOD.
          </p>
          <p className="paragrafo">
          Também foi criado o pátio de compostagem não muito tempo depois em um crescimento anual acelerado criamos uma identidade visual convincente e única para o nosso projeto e conseguimos cada vez mais recurso. 
          </p>
        </main>
        <footer>
          <Rodape />
          <Direitos />
        </footer>
      </body>
    </html>
  )
}

export default Crescemos