import "./adssection8.css";
import Target from "../../img/target.webp";

const Adssection8 = () => {
  return (
    <div className="adssec8">
      <div className="adssec8-left">
        <img src={Target} alt="image de cible" />
      </div>
      <div className="adssec8-right">
        <h1>COMMENT FONCTIONNE LE CIBLAGE SUR LES PLATES-FORMES DE PUBLICITÉ EN LIGNE ?</h1>
        <hr />
        <ul>
          <li>
            <span>Ciblage par mots-clés :</span> Vous décidez sur quels mots-clés vous souhaitez que votre publicité en ligne apparaisse lorsque les utilisateurs les recherchent.
          </li>
          <li>
            <span>Ciblage démographique :</span> Vous pouvez choisir d'afficher votre publicité à un genre spécifique et à un groupe d'âge spécifique.
          </li>
          <li>
            <span>Ciblage géographique :</span> Vous pouvez définir votre annonce en ligne pour qu'elle n'apparaisse que dans un pays spécifique, une ville spécifique, ou même dans un rayon défini autour d'un emplacement.
          </li>
          <li>
            <span>Ciblage horaire :</span> Vous pouvez indiquer les jours et/ou l'heure de la journée où votre annonce sera diffusée.
          </li>
          <li>
            <span>Ciblage par appareil :</span> Vous pouvez choisir de montrer votre publicité en priorité aux personnes effectuant des recherches depuis leur téléphone mobile ou leur ordinateur de bureau.
          </li>
          <li>
            <span>Ciblage d'audience :</span> Vous pouvez définir vos annonces pour qu'elles soient affichées à un ensemble spécifique de personnes regroupées par affinités. Vous pouvez également diffuser vos annonces aux personnes qui ont déjà visité votre site Web précédemment (remarketing).
          </li>
        </ul>
        <div className="adssec8-desc">
          <p>
            <span>Exemple :</span> Si vous avez un restaurant à Taipei, vous pourriez choisir d'afficher vos annonces aux personnes âgées de 18 à 50 ans, dans un rayon de 2 km autour de votre restaurant, du lundi au vendredi de 12h00 à 14h00, et qui ont recherché "restaurant Taipei" depuis leur appareil mobile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adssection8;