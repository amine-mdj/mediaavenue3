import './analyticsection5.css'
import Tools from '../../img/web-analytics-tool.webp'

const Analyticsection5 = ()=>{
  return(<div className='ticsec5'>
    <div className='ticsec5-left'>
      <h1>POURQUOI UTILISER UN OUTIL DE WEB ANALYTICS ? </h1>
      <hr/>
      <p>Gérer un site web sans analyser les données dont vous disposez, c'est comme gérer
         une entreprise sans examiner de près les données comptables. Les données de votre
          audience vous aideront à identifier les opportunités de changement.</p>
      <p>Avec les bons outils, vous aurez une meilleure idée de l'impact 
        de toute modification apportée à votre site web.  ce qui vous permettra
         d'évaluer rationnellement si s'il a eu un effet positif.</p>
    </div>
    <div className='ticsec5-right'>
     <img src={Tools} alt="tools"/>
    </div>
  </div>)
}

export default Analyticsection5