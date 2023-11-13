import './adssection2.css';
import Avatar1 from '../../img/avatar1.webp';
import Avatar2 from '../../img/avatar2.webp';
import Avatar3 from '../../img/avatar3.webp';

const Adssection2 = () => {
  return (
    <div className='adssec2'>
      <h1>COMMENT MEDIA AVENUE FACTURE-T-IL SES SERVICES ?</h1>
      <hr/>
      <div className='adssec2-bottom'>
        <div className='adssec2-item'>
          <div className='adssec2-img'>
            <img src={Avatar1} alt="avatar1"/>
          </div>
          <div className='adssec2-desc'>
            <h2>Basique</h2>
            <p>Si vous avez un budget publicitaire en ligne compris entre
               <span> 40 000 NT (1 400 $) et 80 000 NT (2 700 $) par mois</span>,
               nous facturons 10 % du montant que vous dépensez.</p>
          </div>
        </div>

        <div className='adssec2-item'>
          <div className='adssec2-img'>
            <img src={Avatar2} alt="avatar2"/>
          </div>
          <div className='adssec2-desc'>
            <h2>Premium</h2>
            <p>Si vous avez un budget publicitaire en ligne compris entre
               <span> 80 000 NT (2 700 $) et 150 000 NT (5 000 $) par mois</span>,
               nous facturons 9 % du montant que vous dépensez.</p>
          </div>
        </div>

        <div className='adssec2-item'>
          <div className='adssec2-img'>
            <img src={Avatar3} alt="avatar3"/>
          </div>
          <div className='adssec2-desc'>
            <h2>Entreprise</h2>
            <p>Si vous avez un budget publicitaire en ligne
               <span> supérieur à 150 000 NT (5 000 $) par mois,</span>
               nous facturons 7 % du montant que vous dépensez.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adssection2;