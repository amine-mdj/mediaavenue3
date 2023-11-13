import './adssection7.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faMoneyBill, faEye, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Adssection7 = () => {
  return (
    <div className='adssec7'>
      <h1>QUELLE EST LA MEILLEURE MÉTHODE D'ENCHÈRE POUR MA CAMPAGNE DE PUBLICITÉ EN LIGNE ?</h1>
      <hr/>
      <div className='adssec7-bottom'>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faArrowPointer} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les clics</h2>
          <p>Vous pouvez choisir de centrer votre stratégie d'enchère sur les clics générés par votre annonce en ligne. Cela est particulièrement adapté si vous souhaitez augmenter les visites sur votre site Web. Vous paierez alors à chaque fois que quelqu'un clique sur votre annonce.</p>
        </div>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faMoneyBill} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les conversions</h2>
          <p>Vous pouvez choisir de centrer votre stratégie d'enchère sur les conversions générées par votre annonce. Cela est particulièrement adapté si vous souhaitez augmenter le nombre de visiteurs effectuant une action spécifique sur votre site Web. Vous définirez le montant que vous êtes prêt à payer pour une conversion que vous décidez, et le système optimisera automatiquement votre stratégie d'enchères au coût par clic (CPC) pour générer le plus grand nombre de conversions possible dans le cadre de votre budget.</p>
        </div>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faEye} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les impressions</h2>
          <p>Vous pouvez choisir de centrer votre stratégie d'enchère sur les impressions que reçoit votre annonce en ligne. Cela est particulièrement adapté si vous souhaitez accroître la notoriété de votre marque. Vous paierez alors à chaque fois que votre annonce est affichée de manière visible à un utilisateur.</p>
        </div>
        <div className='adssec7-item'>
          <div className='adssec7-icon'>
            <FontAwesomeIcon icon={faCirclePlay} size="4x" style={{ color: "#ffffff" }} />
          </div>
          <h2>Centré sur les vues</h2>
          <p>Vous pouvez choisir de centrer votre stratégie d'enchère sur les vues que reçoit votre vidéo. Cela est particulièrement adapté si votre publicité est composée d'une vidéo. Vous paierez alors à chaque fois que quelqu'un regarde ou interagit avec votre vidéo.</p>
        </div>
      </div>
    </div>
  );
};

export default Adssection7;