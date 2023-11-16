import "./designsection2.css";
import Responsive from "../../img/responsive.webp";

const Designsection2 = () => {
  
  return (
    <div className="desec2">
      <h1>SITE WEB RESPONSIVE DESIGN (RWD)</h1>
      <hr />
      <div className="desec2-flex">
        <div className="desec2-left">
          <h2>Qu'est-ce qu'un design web responsive ?</h2>
          <p>
          Le Responsive Web Design (RWD) est un processus visant à construire
           une plateforme adaptative, en veillant à ce que la mise en forme de
            vos pages soit toujours la même.  s'adapte toujours à l'appareil de
             l'utilisateur final (orientation et taille).
          </p>
          <h2>Pourquoi devrais-je avoir un site web responsive ?</h2>
          <h3>
          Si vous avez un site web, vous devriez tout simplement avoir un design web responsive .
          </h3>
          <p>
          Aujourd'hui, plus de 50 % du trafic total provient d'appareils mobiles (téléphones portables et tablettes)
          </p>
          <p>
          Par ailleurs, en 2016, Google a annoncé qu'il mettait en œuvre l'indexation
           Mobile-first. En d'autres termes, Google envisage de regarder la version
            mobile de votre site web avant votre version de bureau pour indexer vos pages.
          </p>
          <p>
          Il est désormais clair que la conception d'un site web responsive (RWD), quel que
           soit votre secteur d'activité, n'est pas une option mais une nécessité.
          </p>
        </div>
        <div className="desec2-right">
          <img  src={Responsive} />
        </div>
      </div>
    </div>
  );
};

export default Designsection2;
