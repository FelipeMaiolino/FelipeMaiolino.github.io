import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Nomes from '../Components/Nomes/Nomes'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'

function Creditos() {

  return (
    <div>
      <body>
        <header>
          <Titulo/>
          <nav>
            <MenuVertical />
          </nav>
        </header>
        <main>
          <Nomes/>
        </main>
        <footer>
        <Rodape/>
        <Direitos/>
      </footer>
      </body>
  
    </div>
  )
}

export default Creditos