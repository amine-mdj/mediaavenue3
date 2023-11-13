import './adssection1.css';
import Awards from '../../img/awords-agency.webp';

const Adssection1 = () => {
  return (
    <div className='adssec1'>
      <div className='adssec1-left'>
        <img src={Awards} alt='Récompenses' />
      </div>
      <div className='adssec1-right'>
        <h1>VOTRE AGENCE DE PUBLICITÉ<br/> EN ALGERIE</h1>
        <hr/>
        <p>Nous mettons en place des campagnes de publicité en ligne qui ciblent les visiteurs adéquats sur la bonne plateforme, et nous les optimisons pour vous offrir le plus grand nombre de clics et de conversions dans le cadre de votre budget.</p>
      </div>
    </div>
  );
};

export default Adssection1;