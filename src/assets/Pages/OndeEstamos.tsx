import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'

function OndeEstamos() {

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
          <h2 className='tituloProjeto'>Onde estamos</h2>
          <p className="paragrafo">
            Atualmente o projeto chegou ao patamar de utilizar zero arquivos impressos e toda a informação pode ser encontrada de maneira digital, assim tornando mínima a utilização de qualquer papel e tinta de impressão
          </p>
          <p className="paragrafo">
            E estamos realizando várias pesquisar a respeito de várias vertentes, entre elas:
          </p>
          <p className="paragrafo">
            <ul>
              <li>Utilização de óleo usado de motores aeronauticos (resíduo) na composição de novos produtos;</li>
              <li>Aproveitamento de resíduo de p.c e mica muscovita na obtenção de placas isolantes térmicas;</li>
            </ul>
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

export default OndeEstamos