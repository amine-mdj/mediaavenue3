import "./agencysection3.css";
import Dolls from "../../img/russian-dolls.webp";

const Agencysetion3 = () => {
  return (
    <div className="agsec3">
      <div className="agsec3-left">
        <h1>LA PHILOSOPHIE</h1>
        <hr />
        <p>
          Notre philosophie est que, quelle que soit votre taille, quel que soit votre budget, notre agence numérique a une solution adaptée à votre entreprise.
        </p>
        <p>
          L'étendue de vos besoins en matière de services web est étroitement liée à la taille de votre entreprise et à votre cœur de métier.
        </p>
        <p>
          Nous avons rendu notre offre numérique très flexible afin de pouvoir élaborer une stratégie numérique qui correspond à vos objectifs commerciaux et à votre budget.
        </p>
      </div>
      <div className="agsec3-right">
        <img src={Dolls} />
      </div>
    </div>
  );
};

export default Agencysetion3;