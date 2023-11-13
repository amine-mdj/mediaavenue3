import "./contactsection1.css";

const Contactsection1 = () => {
  return (
    <div className="ctsec1">
        <h1>NOUS AVONS HÂTE DE VOUS ENTENDRE</h1>
        <hr/>
        <div className="ct-wrapper">
      <div className="ctsec1-1">
        <input type="text" placeholder="Entreprise" /><br/>
        <input type="text" placeholder="Nom*" /><br/>
        <input type="text" placeholder="Email*" /><br/>
        <input type="text" placeholder="Mot de passe*" /><br/>
        <textarea placeholder="Message*" rows="8" /><br/>
        <input type="checkbox"/>
        <p> J'accepte d'être contacté par Media Avenue. Ltd par e-mail à des fins d'information et commerciales</p>
        <button>ENVOYER</button>
      </div>
      <div className="ctsec1-2">
        <div>OU</div>
      </div>
      <div className="ctsec1-3">
        <p>
          En cliquant sur "Démarrer un projet", nous vous guiderons à travers une série de questions pour préciser votre demande.
        </p>
        <p>
          Nous la traiterons ensuite et vous répondrons rapidement avec plus de détails sur la façon dont nous pouvons travailler ensemble.
        </p>
        <button>DÉMARRER UN PROJET</button>
      </div>
      </div>
    </div>
  );
};

export default Contactsection1;
