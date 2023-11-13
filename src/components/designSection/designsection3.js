import "./designsection3.css";
import Chameleon from "../../img/chameleon.webp";


const Designsection3 = () => {
  const imagestyle = {
    width: "90%",
    height: "80%",
  };
  return (
    <div className="desec3">
      <div className="upper-desec3">
        <h1>POURQUOI MEDIA AVENUE POUR MON RESPONSIVE WEB DESIGN ?</h1>
        <hr />
        <h2>Nous développons des designs responsives qui sont :</h2>
      </div>
      <div className="lower-desec3">
        <div className="lower-desec3_left">
          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Responsive <br/>(RWD)</h2>
              </div>
              <div className="desec3-para"><p>
              Cela vous paraît étrange ? Il existe plusieurs niveaux de responsive.
               Consultez l'outil de test des pages mobiles de Google pour vérifier
                si la version dite "responsive" de votre site web l'est réellement.
              </p></div>
              
            </div>
          </div>

          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Adaptable</h2>
              </div>
              <div className="desec3-para">
              <p>
              Pour tous les formats d'écran et toutes les orientations.
              </p>
              </div>
              
            </div>
          </div>

          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Léger</h2>
              </div>
              <div className="desec3-para">
              <p>
              Nous compressons, optimisons, minifions et tirons parti de tout
               ce que nous pouvons. Testez la vitesse des pages mobiles de votre
                site web ici
              </p>
              </div>
              
            </div>
          </div>

          <div className="desec3-griditem">
            <div className="desec3-grid-row">
              <div className="desc3-bullet">
                <h2>Conçu pour utilisation mobile</h2>
              </div>
              <div className="desec3-para">
              <p>
              Plus qu'une simple traduction de votre version de bureau,
               nous redessinons votre site web mobile pour qu'il soit optimisé
                pour cet appareil.
              </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="lower-desec3_right">
          <img style={imagestyle} src={Chameleon} />
        </div>
      </div>
    </div>
  );
};

export default Designsection3;
