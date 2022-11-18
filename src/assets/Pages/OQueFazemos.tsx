import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'
import Fazemos from '../Components/Fazemos/Fazemos'
function OQueFazemos() {

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
          <Fazemos/>
        </main>
        <footer>
          <Rodape />
          <Direitos />
        </footer>
      </body>
    </div>
  )
}

export default OQueFazemos