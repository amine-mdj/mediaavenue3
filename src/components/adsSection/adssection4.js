import './adssection4.css';
import Whatis from '../../img/what-is-icon.webp';

const Adssection4 = () => {
  return (
    <div className='adssec4'>
      <div className='adssec4-left'>
        <img src={Whatis} alt="icône de qu'est-ce que c'est" />
      </div>
      <div className='adssec4-right'>
        <h1>QU'EST-CE QUE LA PUBLICITÉ EN<br/> LIGNE ?</h1>
        <hr/>
        <p>La publicité en ligne est une forme de marketing qui permet aux annonceurs de diffuser leur message promotionnel auprès d'un public ciblé sur Internet.</p>
        <p>Elle gagne en popularité au fil du temps car le modèle tarifaire diffère des médias traditionnels et les résultats des campagnes sont très mesurables.</p>
      </div>
    </div>
  );
};

export default Adssection4;