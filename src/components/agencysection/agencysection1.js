import "./agencysection1.css";
import Shop from "../../img/Ajouter2.webp";

const Agencysetion1 = () => {
  return (
    <div className="agsec1">
      <div className="agsec1-left">
        <img src={Shop} />
      </div>
      <div className="agsec1-right">
        <h1>L'AGENCE</h1>
        <hr />
        <p>
          Media avenue est née de la collaboration entre un spécialiste du marketing numérique et un talentueux développeur web.
        </p>
        <p>
          Tous deux de nationalité algerienne, nous avons respectivement 8 et 10 ans d'expérience dans nos domaines respectifs.
        </p>
        <p>
          Nous avons décidé de mettre en commun nos compétences pour créer notre agence numérique en 2017.
        </p>
        <p>
          Évoluant dans un environnement prospère, nous avons l'opportunité de rencontrer régulièrement d'autres professionnels de l'industrie numérique (photographes, rédacteurs, graphistes, etc.).
        </p>
        <p>
          Depuis lors, nous avons renforcé la confiance au sein de ce réseau de partenaires afin de compléter notre offre de services lorsque nos clients en font la demande.
        </p>
      </div>
    </div>
  );
};

export default Agencysetion1;