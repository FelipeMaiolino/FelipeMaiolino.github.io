import React from 'react'
import './Style.css'

function Onde() {

  return (
    <section id="ondeEstamos">
      <div className="oE_Body">
        <div className="oE_texto">
          <h2>Onde Estamos</h2>
          <p>Atualmente o projeto chegou ao patamar de utilizar zero arquivos impressos e toda a informação pode ser encontrada de maneira digital, assim tornando mínima a utilização de qualquer papel e tinta de impressão. <br/><br/>
            E estamos realizando várias pesquisar a respeito de várias vertentes, entre elas:<br/><br/>
            - Utilização de óleo usado de motores aeronauticos (resíduo) na composição de novos produtos;<br/><br/>
            - Aproveitamento de resíduo de p.c e mica muscovita na obtenção de placas isolantes térmicas;<br/><br/>
            - Entre muitos outros.<br/><br/>
            Confira algumas de nossas conquistas </p>
        </div>
        <div className="oE_dataBox">
          <div className="oE_data">
            <p className="data_number">-3,3</p>
            <p className="data_text"><b>Toneladas</b> de resíduos químicos e biológicos</p>
          </div>
          <div className="oE_data">
            <p className="data_number">-9</p>
            <p className="data_text"><b>Toneladas</b> de resíduos recicláveis</p>
          </div>
          <div className="oE_data">
            <p className="data_number">-170</p>
            <p className="data_text"><b>Toneladas</b> de resíduos não recicláveis</p>
          </div>
          <div className="oE_data">
            <p className="data_number">-80.000</p>
            <p className="data_text">Impressões (média mensal)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Onde