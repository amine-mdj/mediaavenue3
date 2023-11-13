import './analyticsection3.css'
import Notepad from '../../img/analytics-notepad.webp'

const Analyticsection3 = ()=>{
  return(<div className='ticsec3'>
    <div className='ticsec3-left'>
     <h1>SERVICES  ANALYTICS WEB À LA <br/> DEMANDE :</h1>
     <hr/>
     <p>Media Avenue peut également prendre en charge des travaux spécifiques sur votre compte <span> Google Analytics :</span></p>
     <ul>
      <li><span>Amélioration du ecommerce : </span>Nous avons mis en place la fonction
       "Amélioration du ecommerce" sur votre compte analytique afin de collecter des informations
        plus spécifiques sur les entonnoirs de conversion de votre site web.</li>
      <li>Mettre en place des balises sur votre site pour suivre des actions spécifiques
         avec<span> le gestionnaire de balises Google (GTM)</span></li>
      <li>Vérifier la configuration de Google Analytics</li>
      <li>Créer des<span> dimensions et des mesures personnalisées.</span></li>
      <li>Test A/B sur la conception des pages</li>
      <li>Et plus...</li>
      
     </ul>
    </div>
    <div className='ticsec3-right'>
      <img src={Notepad} alt='notepad image'/>
    </div>
  </div>)
}

export default Analyticsection3