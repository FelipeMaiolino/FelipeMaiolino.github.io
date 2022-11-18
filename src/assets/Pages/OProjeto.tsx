import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'
import IntroReger from '../Components/IntroReger/IntroReger'
import SobreProjeto from '../Components/SobreProjeto/SobreProjeto'
import OQueFazemos from './OQueFazemos'

function OProjeto() {

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
          <IntroReger />
          <SobreProjeto />
        </main>
        <footer>
          <Rodape />
          <Direitos />
        </footer>
      </body>
    </div>
  )
}

export default OProjeto