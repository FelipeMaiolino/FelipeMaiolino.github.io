import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'


function ComoFazemos() {

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
          <h2 className='tituloProjeto'>Como fazemos</h2>
          <p className="paragrafo">
            O projeto Reger atua em ações de fiscalização e orientação do descarte correto de resíduos nos setores administrativos da instituição, bem como realiza capacitações com os funcionários e estudantes para relembrar alguns conceitos de sustentabilidade e descarte dos resíduos.
          </p>
          <p className="paragrafo">
            Fazemos isso através de palestras e cursos a toda a comunidade acadêmica, coletamos e destinamos também os resíduos orgânicos para uma central de compostagem diariamente, padronizamos a impressão de documentos de maneira que se gaste menos tintas e papeis no processo e claro que acompanhamos todos os relatórios minuciosamente a respeito das ações promovidas pelo projeto.
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

export default ComoFazemos