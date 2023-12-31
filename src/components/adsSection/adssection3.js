import './adssection3.css';

const Adssection3 = () => {
  return (
    <div className='adssec3'>
      <h1>EN QUOI CONSISTE L'OFFRE DE L'AGENCE PPC DE MEDIA AVENUE ?</h1>
      <hr/>
      <p>Nous vous aidons à mettre en place et à surveiller vos campagnes publicitaires pour en tirer le meilleur parti.</p>

      <div className='adssec3-grid'>
        <div className='adssec3-grid-item'>
          <div className='adssec3-item-left'>
            <h2>Étape 1</h2>
          </div>
          <div className='adssec3-item-right'>
            <p>Nous définissons ensemble les objectifs de votre campagne et discutons du budget que vous souhaitez lui allouer.</p>
          </div>
        </div>

        <div className='adssec3-grid-item'>
          <div className='adssec3-item-left'>
            <h2>Étape 2</h2>
          </div>
          <div className='adssec3-item-right'>
            <ul>
              Sur la base de ces objectifs, nous définissons les éléments suivants, par ordre de priorité :
              <li>Le <span>réseau</span> sur lequel vous devriez faire de la publicité.</li>
              <li>Les <span>mots-clés</span> sur lesquels vous devriez faire de la publicité et/ou les sites web/groupes/flux sur lesquels votre annonce en ligne devrait apparaître.</li>
              <li>La <span>cible</span> la plus pertinente pour votre entreprise en termes de démographie, d'horaires, d'emplacement et d'appareil.</li>
              <li>Le <span>contenu</span> (titres, descriptions, images, vidéos) à afficher dans votre publicité en ligne pour obtenir le meilleur taux de clics ou d'impressions.</li>
              <li>Une <span>stratégie d'enchères</span> adaptée aux objectifs de votre campagne publicitaire en ligne et à votre budget.</li>
            </ul>
          </div>
        </div>

        <div className='adssec3-grid-item'>
          <div className='adssec3-item-left'>
            <h2>Étape 3</h2>
          </div>
          <div className='adssec3-item-right'>
            <p>Nous lançons la ou les campagnes, nous surveillons les résultats au quotidien, et nous travaillons à améliorer la qualité de vos annonces.</p>
          </div>
        </div>

        

        <div className='adssec3-grid-item'>
          <div className='adssec3-item-left'>
            <h2>Étape 4</h2>
          </div>
          <div className='adssec3-item-right'>
            <p>Nous vous faisons régulièrement des rapports et vous fournissons des suggestions pour l'optimiser.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adssection3;