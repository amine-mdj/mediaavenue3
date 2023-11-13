import './seosection4.css'
import Working from '../../img/seo-working.webp'

const Seosection4 = () =>{
    return(<div className='seosec4'>
     <div className='seosec4-left'>
       <img src={Working}/>
     </div>
     <div className='seosec4-right'>
      <h2>2ème étape : Mise en œuvre de la suggestion</h2>
      <hr/>
      <p>Nous passons en revue les suggestions mentionnées dans le rapport
        <span>d'audit SEO</span>et revenons vers vous avec un plan d'action pour les mettre
         en œuvre.</p>
      <p>Lors de la phase de déploiement de votre stratégie de référencement, nous sommes
         en contact régulier avec vous pour nous assurer que notre mise en œuvre suit
          vos souhaits initiaux, et pour l'ajuster en fonction des nouvelles demandes
           que vous pourriez avoir.</p>
      <div>
        <p>
            <span>Prix / livraison :</span><br/>
            1 000NT/heure (15$/heure) de travail. Nous ferons correspondre
             chaque suggestion à une estimation du temps nécessaire à sa mise en œuvre.
        </p>
      </div>
     </div>
    </div>)
}

export default Seosection4