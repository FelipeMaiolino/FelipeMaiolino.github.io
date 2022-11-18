import React from 'react'
import MenuVertical from '../Components/MenuVertical/MenuVertical'
import Titulo from '../Components/Titulo/Titulo'
import Rodape from '../Components/Rodape/Rodape'
import Direitos from '../Components/Direitos/Direitos'
import './PageStyle.css'

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
          <h2 className='tituloProjeto'>O Projeto</h2>

          <p className="paragrafo">
            O projeto REGER engloba vários setores da instituição e foca na redução da geração de resíduos, se pauta no princípio dos 3 Rs e nos ODS da ONU: redução no consumo e desperdício, reutilização e reciclagem de materiais.
          </p>
          <p className="paragrafo">
            O Unisagrado possui uma preocupação constante com os resíduos produzidos em todas as suas atividades, porém nem todos têm consciência do que nós já fazemos. Esta preocupação com os resíduos vem de uma necessidade não só da instituição, mas um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo.
          </p>
          <p className="paragrafo">
            E esse é o projeto REGER (Redução da Geração de Resíduos), um projeto criado em 2016 com o objetivo de reduzir os resíduos gerados através de intervenções no consumo e em certos hábitos que prejudicam essa questão.
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

export default OProjeto