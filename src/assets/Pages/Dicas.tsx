import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'
function Dicas() {

  return (
    <html>
      <body>
        <header>
          <Titulo/>
          <nav>
            <MenuVertical />
          </nav>
        </header>
        <main>
         <h2 className='tituloProjeto'>Projeto Extencionista da Discilina de Linguagem de Programação II</h2>
        </main>
      <footer>
        <Rodape/>
        <Direitos/>
      </footer>
      </body>
    </html>
  )
}

export default Dicas