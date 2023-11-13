import "./seosection1.css";
import Seo from "../../img/seo-strategy.webp";

const Seosection1 = () => {
  return (
    <div className="seosec1">
      <div className="seosec1-left">
        <img src={Seo} alt="seo image" />
      </div>
      <div className="seosec1-right">
        <h1>Votre agence de référencement en Algérie</h1>
        <hr />
        <p>
        Nous proposons une gamme de services de référencement sur mesure qui génèrent
         un trafic ciblé et convertissent les clients potentiels.
        </p>
      </div>
    </div>
  );
};

export default Seosection1;
