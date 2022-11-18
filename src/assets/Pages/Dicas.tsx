import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'
function Dicas() {

  return (
    <div>
      <body>
        <header>
          <Titulo />
          <nav>
            <MenuVertical />
          </nav>
        </header>
        <main>
          <h2 className='tituloProjeto'>Dicas</h2>
        </main>
        <footer>
          <Rodape />
          <Direitos />
        </footer>
      </body>
    </div>
  )
}

export default Dicas