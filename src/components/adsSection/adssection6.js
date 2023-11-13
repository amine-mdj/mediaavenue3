import './adssection6.css';

const Adssection6 = () => {
  return (
    <div className='adssec6'>
      <div className='adssec6-inner'>
        <h1>QUEL EST LE MEILLEUR RÉSEAU POUR MA CAMPAGNE DE PUBLICITÉ EN LIGNE ?</h1>
        <hr/>
        <h2>À l'agence Media Avenue, nous menons des campagnes sur les 3 principaux réseaux publicitaires disponibles en ligne :</h2>
        <div className='adssec6-bottom'>
          <div className='adssec6-item'>
            <h2>Réseau de recherche Google :</h2>
            <p>Si vous décidez de faire de la publicité sur le réseau de recherche Google, vos annonces peuvent potentiellement apparaître sur les pages de résultats de recherche de Google et sur d'autres sites Web dédiés à la recherche. C'est idéal si l'objectif de votre campagne est d'<span>augmenter les visites et générer des conversions.</span></p>
          </div>

          <div className='adssec6-item'>
            <h2>Réseau Display Google :</h2>
            <p>Si vous décidez de faire de la publicité sur le réseau Display Google, vos annonces apparaîtront sur un vaste réseau de sites Web spécifiques à des sujets que vous pouvez choisir, et/ou sur YouTube. C'est idéal si l'objectif de votre campagne est d'<span>accroître la notoriété de votre marque.</span></p>
          </div>

          <div className='adssec6-item'>
            <h2>Réseau Facebook :</h2>
            <p>Si vous décidez de faire de la publicité sur le réseau Facebook, vos annonces peuvent potentiellement apparaître sur Facebook à différents endroits, sur Instagram, ainsi que sur un réseau de sites Web externes de taille moyenne et d'applications mobiles. Cela peut être idéal pour la<span> notoriété, la réflexion et l'action,</span> en fonction des paramètres de votre campagne.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adssection6;