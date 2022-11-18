import React from 'react'
import videoBG from './videoBG.mp4'
import './Style.css'
import bia1 from './bia1-modified.png'
import autora2 from './autora2-modified.png'

function SobreProjeto() {

  return (
    <section id="oProjeto">
      <div className="projetoBody">
        <h2>Sobre o projeto</h2>
        <div className="projetoBody_t1">
          <p/>Vivemos um momento crítico com relação à
            geração excessiva de resíduos.
            A Unisagrado possui uma preocupação constante com os resíduos produzidos em todas as suas atividades, porém nem todos têm consciência do que nós já fazemos. <br/><br/>Esta preocupação com os resíduos vem de uma necessidade não só da instituição, mas um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo.<p/>
        </div>
        <div className="projetoBody_t2">
          <p>O projeto engloba vários setores da instituição e foca na redução da geração de resíduos, se pauta no princípio dos 3 Rs e nos ODS da ONU: <strong>redução no consumo e desperdício, reutilização e reciclagem de materiais.</strong></p><br/>
          <p>E esse é o <strong>projeto Reger </strong>(Redução da Geração de Resíduos), um projeto criado em 2016 com o objetivo de reduzir os resíduos gerados através de intervenções no consumo e em certos hábitos que prejudicam essa questão.</p>
        </div>
        <p className="msgAutoras">Mensagem das Autoras</p>
        <div className="autoras">
          <img src={bia1} alt="" />
          <p>"Buscamos a sustentabilidade a longo prazo,
            porém sabemos que esse objetivo nunca será
            atingido.
            Dessa forma cabe a nós desenvolvermos
            ações que irão atuar como pequenos degraus
            em direção a um mundo sustentável.
            Dentre essas ações está a REDUÇÃO dos
            resíduos gerados".</p>
          <p>Beatriz Antoniassi</p>
        </div>
        <div className="autoras">
          <img src={autora2} alt="" />
          <p>“Evoluímos em vários setores, especialmente
            nos setores produtivos, e com isso
            aumentamos a nossa capacidade de gerar
            resíduos. O momento atual exige de nós ações
            mais pontuais.
            Precisamos sair da nossa área de conforto e
            não só destinarmos corretamente os resíduos
            produzidos, mas também REDUZIR a produção
            dos mesmos na medida do possível,
            trabalhando hoje para garantir o amanhã"</p>
          <p>Dulce H. J. Constantino</p>
        </div>
      </div>
    </section>
  )
}

export default SobreProjeto