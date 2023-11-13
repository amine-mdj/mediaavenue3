import "./seosection2.css";
import Seoteam from '../../img/seo-team.webp'

const Seosection2 = () => {
  return (
    <div className="seosec2">
      <div className="seosec2-left">
        <img src={Seoteam} alt='seo team' />
      </div>
      <div className="seosec2-right">
        <h1>UNE ÉQUIPE D'EXPERTS EN RÉFÉRENCEMENT À VOTRE SERVICE</h1>
        <hr />
        <p>
        La mise en œuvre d'une stratégie de référencement solide est un processus
         à long terme qui implique un engagement à la fois pour les experts en référencement
          de Media avenue Web et nos clients
        </p>
        <p>
        Il n'existe pas de "tour de magie" pour mettre en œuvre une stratégie de
         référencement performante et obtenir un bon classement dans les moteurs de
          recherche, mais simplement une quantité substantielle de travail et d'expertise.
        </p>
        <p>
        Notre approche du référencement est simple et suit un processus standard qui s'est
         déjà avéré efficace et solide.
        </p>
        <p>
        Notre offre standard de référencement est divisée en 3 étapes majeures,
         chacune composée de plusieurs couches. Défilez vers le bas pour obtenir plus 
         de détails sur chaque étape !
        </p>
      </div>
    </div>
  );
};

export default Seosection2;
