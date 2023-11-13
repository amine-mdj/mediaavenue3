import "./analyticsection7.css";
import Datatypes from "../../img/web-analytics-data-type.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Analyticsection7 = () => {
  return (
    <div className="ticsec7">
      <div className="ticsec7-left">
        <h1>QUE PUIS-JE SUIVRE AVEC MON COMPTE GOOGLE ANALYTICS ?</h1>
        <hr />
        <p>
          <span>Google Analytics </span>peut traiter presque toutes les informations
           relatives aux utilisateurs de votre site web. Il existe 4 catégories
            principales de données que vous pouvez collecter avec le compte Google
             Analytics :
        </p>
        <div className="ticsec7-1stbottom">
          <ul>
            <li>
              <span>Audience: </span>Données sur le volume de votre audience,
               sa localisation, ses caractéristiques démographiques, son appareil,
                son navigateur...
            </li>
            <li>
              <span>Acquisition: </span>Données sur la manière dont les utilisateurs sont arrivés sur votre site web.
            </li>
            <li>
              <span>Comportement :</span>Données sur la façon dont les utilisateurs ont interagi avec votre site web.
            </li>
            <li>
              <span>Conversions: </span>Les données qui relient l'audience,
               l'acquisitionet le comportement de vos utilisateurs
                avec une conversion que vous (achat, inscription à une lettre d'information,
                 ...).
            </li>
          </ul>
        </div>
        <div className="ticsec7-2ndbottom">
          <p>
          Vous pouvez ensuite croiser toutes ces mesures pour suivre le comportement
           et le canal d'acquisition d'un groupe très spécifique d'utilisateurs.
          </p>
          <div className="ticsec7-arrow">
          <FontAwesomeIcon icon="fa-solid fa-arrow-down" size="2xl" style={{color: "#ffffff",}} />
          </div>
          <p>
            <span>Par exemple : </span> Nous pourrions savoir combien
             de femmes âgées de 25 à 34 ans, vivant à Taïwan, qui sont
              arrivées sur votre site web après avoir cliqué sur votre page Facebook,
               ont abandonné leur panier d'achat lorsque les frais de livraison étaient
                supérieurs à xxxx $.
          </p>
        </div>
      </div>
      <div className="ticsec7-right">
        <img src={Datatypes} alt="data type image" />
      </div>
    </div>
  );
};

export default Analyticsection7;
