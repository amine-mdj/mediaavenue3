import './analyticsection1.css'
import Analyse from '../../img/webanalytics.webp'

const Analyticsection1 = ()=>{
  return(<div className='ticsec1'>
     <div className='ticsec1-left'>
      <img src={Analyse} alt='web analytics'/>
     </div>
     <div className='ticsec1-right'>
      <h1>VOTRE AGENCE DE WEB ANALYTICS EN ALGERIE</h1>
      <hr/>
      <p>Nous vous aidons à collecter les données de votre site web,
          à sélectionner celles qui sont pertinentes pour vos objectifs,
           et à transformer ces données brutes en informations utiles.</p>
     </div>
  </div>)
}

export default Analyticsection1