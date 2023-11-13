import "./analyticsection6.css";
import Question from "../../img/website-analytics.webp";

const Analyticsection6 = () => {
  return (
    <div className="ticsec6">
      <div className="ticsec6-left">
        <img src={Question} alt='question image' />
      </div>
      <div className="ticsec6-right">
        <h1>QUELS OUTILS D'ANALYSE PUIS-JE UTILISER SUR MON SITE WEB ?</h1>
        <hr />
        <p>
        l existe de nombreux<span> outils d'analyse web </span>disponibles en ligne pour collecter les données de votre site web.
        </p>
        <p>
        Pour des besoins très spécifiques, il existe des outils très spécifiques.
         Dans l'ensemble,<span> Google Analytics </span> est l'outil qu'il vous faut
          utiliser car il est susceptible de couvrir 95 % de vos besoins en termes de
           collecte de données et de personnalisation.
        </p>
        <p>
        De plus, il est totalement gratuit. Bien que les informations de base soient
         relativement faciles à récupérer sur<span> Google Analytics,</span> les
          informations multidimensionnelles et métriques sont souvent difficiles à
           collecter et à analyser.
        </p>
      </div>
    </div>
  );
};

export default Analyticsection6;
