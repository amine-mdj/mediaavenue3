import "./agencysection4.css";
import Taiwan from '../../img/pineapple-web-in-taiwan.webp'

const Agencysetion4 = () => {
  return (
    <div className="agsec4">
      <div className="agsec4-left">
        <h1>L'EMPLACEMENT</h1>
        <hr />
        <p>Notre agence est située à Alger Said Hamdine, Algérie.</p>
        <p>
          Nous croyons qu'il existe de solides opportunités commerciales à Alger pour les services de développement web, et nous comprenons clairement les défis auxquels les entreprises algérienne sont confrontées en matière de numérique.
        </p>
        <p>Malgré notre emplacement en Algérie, notre agence sert également une clientèle internationale.</p>
      </div>
      <div className="agsec4-right">
        <img src={Taiwan} />
      </div>
      <div></div>
    </div>
  );
};

export default Agencysetion4;