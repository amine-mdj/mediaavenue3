import "./progsection6.css";
import Businesswebsite from '../../img/business-website.webp'

const Progsection6 = () => {
  return (
    <div className="progsec6">
      <h1>SITE WEB D'ENTREPRISE</h1>
      <hr />
      <div className="progsec6-bottom">
        <div className="progsec6-left">
          <h2>Qu'est-ce qu'un site web d'entreprise ?</h2>
          <p>Un <span>site web commercial ou site web d'entreprise</span> est un
           site web qui  qui vise à informer les visiteurs sur l'activité d'un commerce
            ou d'une enterprise privée.</p>
          <h2>Pourquoi devrais-je avoir un site web d'entreprise ?</h2>
          <p><span>Si vous avez une entreprise, vous devez tout simplement avoir un site web </span>
           À mon avis, toute entreprise, quel que soit son secteur d'activité, devrait avoir un site Internet. un site web d'entreprise.</p>
          <p>Relativement facile à mettre en place, un site d'entreprise est, par rapport
             aux autres canaux de communication, le plus rentable. Il générera sans aucun
              doute de nouvelles pistes, améliorera votre visibilité locale et
               donnera à votre marque un profil public.</p>
        </div>
        <div className="progsec6-right">
            <img src={Businesswebsite}/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Progsection6;
