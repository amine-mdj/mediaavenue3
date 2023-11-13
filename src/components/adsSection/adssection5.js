import './adssection5.css';
import Speakers from '../../img/speakers.webp';

const Adssection5 = () => {
  return (
    <div className='adssec5'>
      <div className='adssec5-left'>
        <h1>POURQUOI DEVRAIS-JE LANCER DES CAMPAGNES DE PUBLICITÉ EN LIGNE ?</h1>
        <hr/>
        <p>Vous devriez lancer des campagnes de publicité en ligne pour transmettre un message à vos clients potentiels au bon moment et au bon endroit.</p>
        <p>Le message délivré doit être en accord avec vos <span>objectifs marketing :</span></p>
        <ul>
          <li><span>Créer de la notoriété :</span> Adapté si vous lancez une nouvelle entreprise ou un nouveau produit, ou si vous étendez votre activité dans une nouvelle région.</li>
          <li><span>Influencer la réflexion :</span> Pertinent si vous vendez un produit ou un service qui nécessite d'éduquer les clients, ou si vous vendez un produit que vous souhaitez différencier de la concurrence.</li>
          <li><span>Inciter à l'action :</span> Cohérent si vous recherchez des clients sur le point d'effectuer un achat, ou si vous vendez un produit établi.</li>
        </ul>
      </div>
      <div className='adssec5-right'>
        <img src={Speakers} alt='enceintes' />
      </div>
    </div>
  );
};

export default Adssection5;