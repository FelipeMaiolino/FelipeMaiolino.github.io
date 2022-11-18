import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'
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
          <h2 className='tituloProjeto'>O Que Fazemos</h2>
          <p className="paragrafo">
            O projeto REGER trabalha com o diagnóstico de situações envolvendo o descarte de resíduos a criação e implementação de propostas para tornar o processo de separação e eliminação o mais eficaz possível, a incorporação de diversos meios de alteração de mentalidade e hábitos prejudiciais.
          </p>
          <p className="paragrafo">
            <ul>
              <li> Fazemos a coleta de resíduos</li>
              <li> Possuímos um pátio de compostagem</li>
              <li> Realizamos a alteração visual de locais de recolhimento de resíduos como lixeiras e depósitos</li>
              <li> Promovemos a substituição de matérias para reduzir a quantidade de resíduos gerados por, como exemplo, garrafas plásticas.</li>
            </ul>
          </p>

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